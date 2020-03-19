<template>
  <div>
    <h1>宠主管理</h1>
    <AddLoad></AddLoad>
    <Search></Search>
    <LoadList></LoadList>
  </div>
</template>

<script>
import LoadList from './Load/loadList';
import AddLoad from './Load/AddLoad';
import Search from '../Platform/Load/Search'
export default {
  components: {
    LoadList,AddLoad,Search
  },
}
</script>

<style>

</style>