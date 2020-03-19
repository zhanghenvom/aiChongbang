<template>
  <div>
    <h1>供应商审核</h1>
    <Search></Search>
    <SupplierExamineList></SupplierExamineList>
  </div>
</template>

<script>
import SupplierExamineList from '../Platform/SupplierExamine/SupplierExamineList';
import Search from '../Platform/SupplierExamine/Search'
export default {
  components:{
    SupplierExamineList,Search
  }
}
</script>

<style>

</style>