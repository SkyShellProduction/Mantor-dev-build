<template>
    <a href="#" class="order__link" :class="link">
       {{ text }}
        <svg
            width="167"
            height="19"
            viewBox="0 0 167 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="order__svg"
        >
            <circle cx="165.5" cy="17.5" r="1.5" fill="#0070FF" />
            <path d="M1 1L17.5 17.5H164" stroke="#0070FF" />
        </svg>
    </a>
</template>
<script>
export default {
    props: {
        link: {
            type: String,
            default: "",
        },
        text: {
            type: String,
            default: "заказать звонок"
        }
    },
    name: 'CallOrder'
};
</script>
<style lang="scss">
.order__link {
    display: flex !important;
    align-items: center;
    position: relative;
    white-space: nowrap;
    &::before {
        content: "";
        display: block;
        width: 9px;
        height: 9px;
        margin-right: 10px;
        background: #0070ff;
        filter: blur(3px);
        border-radius: 50%;
        box-shadow: 0 0 9px 2px rgb(0 110 255 / 50%), 0 0 10px 3px #006eff;
        transition: 0.3s linear;
    }
}
.order__svg {
    position: absolute;
    bottom: -5px;
    left: 4px;
    max-width: 197px;
    width: 100%;
}
.order__link:hover {
    color: #0070ff;
    &::before{
         box-shadow: 0 0 15px 3px rgb(0 110 255 / 50%), 0 0 17px 4px #006eff;
    }
}
</style>