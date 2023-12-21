<template>
    <div class="navbar-container">
        <router-link to="/" class="nav-link">головна</router-link>
        <router-link to="/family" class="nav-link">Сім'я</router-link>
        <router-link to="/cooking" class="nav-link">Кухня</router-link>
        <div v-if="getUser" class="user-section" @mouseover="showDropdown" @mouseout="hideDropdown">
            <div class="avatar">
                <img :src="getUser.photoURL" alt="User Avatar" />
            </div>
            <div class="details">
                <span class="username">{{ getUser.displayName }}</span>
                <div class="dropdown" :class="{ 'show': isDropdownVisible }">
                    <router-link to="/profile" class="dropdown-link">Мій профіль</router-link>
                    <router-link to="/favorites" class="dropdown-link">Вподобані вакансії</router-link>
                    <router-link to="/LoginPage" @click="onLogout" class="dropdown-link">Вихід</router-link>
                </div>
            </div>
        </div>
        <div v-else>
            <router-link to="/login" class="login-link">Login</router-link>
        </div>
        <div class="search-section">
            Пошук
            <input v-model="titleToFind" type="text" class="search-input" />
            <button @click="loadFilteredTitle" class="search-button">Пошук</button>
        </div>
    </div>
    <router-view />
</template>


<script> 
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters('auth', ['getUser']),
    },
    data() {
        return {
            isDropdownVisible: false,
            titleToFind: null,
            
        };
    },
    methods: {
        ...mapActions('auth', ['logout',]),
        onLogout() {
            this.logout();
            this.$router.push({
                name: 'LoginPage',
            });
        },
        showDropdown() {
            this.isDropdownVisible = true;
        },
        hideDropdown() {
            this.isDropdownVisible = false;
        },
    }
};
</script>

<style lang="css" scoped>
    /* Navbar container */
.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f5f5f5;
}

/* Navigation links */
.nav-link {
  margin-right: 10px;
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

/* User section */
.user-section {
  display: flex;
  align-items: center;
}

/* User avatar */
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 10px;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* User details */
.details {
  display: flex;
  flex-direction: column;
}

.username {
  font-weight: bold;
}

/* Dropdown menu */
.dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  display: none;
}

.show {
  display: block;
}

/* Dropdown links */
.dropdown-link {
  display: block;
  text-decoration: none;
  color: #333;
  margin-bottom: 5px;
}

/* Login link */
.login-link {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

/* Search section */
.search-section {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

/* Search input */
.search-input {
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
}

/* Search button */
.search-button {
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;

}
</style>