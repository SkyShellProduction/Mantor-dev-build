<template>
    <table class="table">
        <tr>
            <th class="first__row">Артикул</th>
            <th class="second__row">Применение</th>
        </tr>
        <slot>
            <tr v-for="n in 5" :key="n">
                <td class="first__row">0445120054</td>
                <td class="second__row">
                    2855491/504091504 /000050409 1504/0032816550040
                </td>
            </tr>
        </slot>
    </table>
    <CallOrder text="Показать ещё" class="specs__link" />
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.table {
    border-collapse: collapse;
    margin: 13px 0 20px;
    width: 100%; 
}
.first__row,
.second__row {
    padding: 10px 8px;
    background: #fff;
    border: 1px solid #000;
    font-size: 14px;
    line-height: 17px;
}
th.first__row,
th.second__row {
    background: rgba(0, 0, 0, 0.05);
    text-align: left;
}
.specs__link {
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    color: #000;
    width: max-content;
    margin-left: 15px;
    &::before {
        margin-right: 27px;
    }
}
</style>