// admin.js - Sistema de Gerenciamento de Usuários UENO

class UserManager {
    constructor() {
        this.storageKey = 'ueno_users';
        this.users = this.loadUsers();
        this.initializeEventListeners();
        this.renderUsers();
    }

    // Carrega usuários do Local Storage
    loadUsers() {
        try {
            const stored = localStorage.getItem(this.storageKey);
            return stored ? JSON.parse(stored) : [];
        } catch (error) {
            console.error('Erro ao carregar usuários:', error);
            return [];
        }
    }

    // Salva usuários no Local Storage
    saveUsers() {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(this.users));
        } catch (error) {
            console.error('Erro ao salvar usuários:', error);
            alert('Erro ao salvar dados. Verifique o espaço de armazenamento.');
        }
    }

    // Inicializa os event listeners
    initializeEventListeners() {
        // Formulário de cadastro
        const userForm = document.getElementById('userForm');
        userForm.addEventListener('submit', (e) => this.handleSubmit(e));

        // Botão limpar formulário
        const clearFormBtn = document.getElementById('clearForm');
        clearFormBtn.addEventListener('click', () => this.clearForm());

        // Botão limpar todos
        const clearAllBtn = document.getElementById('clearAll');
        clearAllBtn.addEventListener('click', () => this.clearAllUsers());

        // Campo de pesquisa
        const searchInput = document.getElementById('searchInput');
        searchInput.addEventListener('input', (e) => this.handleSearch(e.target.value));
    }

    // Manipula o envio do formulário
    handleSubmit(event) {
        event.preventDefault();
        
        const userName = document.getElementById('userName').value.trim();
        const userEmail = document.getElementById('userEmail').value.trim();

        // Validação básica
        if (!userName || !userEmail) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        // Validação de email duplicado
        if (this.users.some(user => user.email.toLowerCase() === userEmail.toLowerCase())) {
            alert('Este e-mail já está cadastrado.');
            return;
        }

        // Criar novo usuário
        const newUser = {
            id: Date.now().toString(),
            nome: userName,
            email: userEmail,
            dataCadastro: this.formatDate(new Date())
        };

        // Adicionar à lista
        this.users.unshift(newUser); // Adiciona no início da lista
        this.saveUsers();
        this.renderUsers();
        this.clearForm();

        // Feedback visual
        this.showSuccessMessage('Usuário cadastrado com sucesso!');
    }

    // Limpa os campos do formulário
    clearForm() {
        document.getElementById('userName').value = '';
        document.getElementById('userEmail').value = '';
        document.getElementById('userName').focus();
    }

    // Exclui um usuário específico
    deleteUser(userId) {
        if (confirm('Tem certeza que deseja excluir este usuário?')) {
            this.users = this.users.filter(user => user.id !== userId);
            this.saveUsers();
            this.renderUsers();
            this.showSuccessMessage('Usuário excluído com sucesso!');
        }
    }

    // Exclui todos os usuários
    clearAllUsers() {
        if (this.users.length === 0) {
            alert('Não há usuários para excluir.');
            return;
        }

        if (confirm('Tem certeza que deseja excluir TODOS os usuários? Esta ação não pode ser desfeita.')) {
            this.users = [];
            this.saveUsers();
            this.renderUsers();
            document.getElementById('searchInput').value = '';
            this.showSuccessMessage('Todos os usuários foram excluídos!');
        }
    }

    // Manipula a pesquisa
    handleSearch(searchTerm) {
        const filteredUsers = this.users.filter(user => 
            user.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase())
        );
        this.renderUsers(filteredUsers);
    }

    // Renderiza a lista de usuários
    renderUsers(usersToRender = null) {
        const usersList = document.getElementById('usersList');
        const users = usersToRender || this.users;

        if (users.length === 0) {
            usersList.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-users"></i>
                    <p>${usersToRender ? 'Nenhum usuário encontrado.' : 'Nenhum usuário cadastrado ainda.'}</p>
                </div>
            `;
            return;
        }

        usersList.innerHTML = users.map(user => `
            <div class="user-card" data-user-id="${user.id}">
                <div class="user-info">
                    <h4>${this.escapeHtml(user.nome)}</h4>
                    <p><i class="fas fa-envelope"></i> ${this.escapeHtml(user.email)}</p>
                    <p><i class="fas fa-calendar"></i> Cadastrado em: ${user.dataCadastro}</p>
                </div>
                <div class="user-actions">
                    <button class="btn-delete" onclick="userManager.deleteUser('${user.id}')" title="Excluir usuário">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `).join('');
    }

    // Formata a data para exibição
    formatDate(date) {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        
        return `${day}/${month}/${year} ${hours}:${minutes}`;
    }

    // Escapa HTML para prevenir XSS
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Mostra mensagem de sucesso
    showSuccessMessage(message) {
        // Criar elemento de notificação
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #4CAF50;
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 4px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.2);
            z-index: 1000;
            font-family: var(--fonte-principal);
            font-weight: 500;
            animation: slideIn 0.3s ease;
        `;
        notification.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;

        // Adicionar CSS da animação se não existir
        if (!document.getElementById('notification-styles')) {
            const style = document.createElement('style');
            style.id = 'notification-styles';
            style.textContent = `
                @keyframes slideIn {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                @keyframes slideOut {
                    from { transform: translateX(0); opacity: 1; }
                    to { transform: translateX(100%); opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        }

        document.body.appendChild(notification);

        // Remover após 3 segundos
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    // Método para exportar dados (funcionalidade extra)
    exportUsers() {
        if (this.users.length === 0) {
            alert('Não há usuários para exportar.');
            return;
        }

        const dataStr = JSON.stringify(this.users, null, 2);
        const dataBlob = new Blob([dataStr], {type: 'application/json'});
        const url = URL.createObjectURL(dataBlob);
        
        const link = document.createElement('a');
        link.href = url;
        link.download = `usuarios_ueno_${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        
        URL.revokeObjectURL(url);
    }

    // Método para obter estatísticas (funcionalidade extra)
    getStats() {
        return {
            total: this.users.length,
            today: this.users.filter(user => {
                const today = new Date().toDateString();
                const userDate = new Date(user.dataCadastro.split(' ')[0].split('/').reverse().join('-')).toDateString();
                return today === userDate;
            }).length
        };
    }
}

// Inicializar o gerenciador quando a página carregar
let userManager;

document.addEventListener('DOMContentLoaded', function() {
    userManager = new UserManager();
    
    // Adicionar funcionalidade de Enter no campo de pesquisa
    document.getElementById('searchInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    });

    // Focar no primeiro campo do formulário
    document.getElementById('userName').focus();
});

// Adicionar funcionalidade de atalhos de teclado
document.addEventListener('keydown', function(e) {
    // Ctrl + L para limpar formulário
    if (e.ctrlKey && e.key === 'l') {
        e.preventDefault();
        userManager.clearForm();
    }
    
    // Ctrl + F para focar na pesquisa
    if (e.ctrlKey && e.key === 'f') {
        e.preventDefault();
        document.getElementById('searchInput').focus();
    }
});

// Prevenir perda de dados ao sair da página
window.addEventListener('beforeunload', function(e) {
    const userName = document.getElementById('userName').value.trim();
    const userEmail = document.getElementById('userEmail').value.trim();
    
    if (userName || userEmail) {
        e.preventDefault();
        e.returnValue = '';
    }
});

