<template>
  <div>
    <h1>用户管理</h1>
    <div><AddUser></AddUser><Search></Search></div>
    <UserList></UserList>
  </div>
</template>

<script>
import UserList from './User/UserList';
import AddUser from './User/AddUser';
import Search from './User/Search'
export default {
  components: {
    UserList,AddUser,Search
  },
}
</script>

<style>

</style>