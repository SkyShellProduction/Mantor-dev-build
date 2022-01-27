<template>
    <div class="some__text">
        <div class="some__pillar"></div>
        <slot />
    </div>
</template>
<style lang="scss">
      .some__text {
        display: flex;
        font-size: 24px;
        line-height: 29px;
    }
    .some__pillar {
        flex-shrink: 0;
        width: 16px;
        background: rgba(255, 255, 255, 0.3);
        margin-right: 35px;
        height: inherit;
    }
    @media(max-width: 960px){
        .some__text{
            font-size: 18px;
            line-height: 22px;
        }
    }
    @media(max-width: 720px){
        .some__text{
            font-size: 14px;
            line-height: 17px;
        }
        .some__pillar{
            width: 6px;
            margin-right: 16px;
        }
    }
</style>
<script>
export default {
    name: 'TextWithPillar'
}
</script>