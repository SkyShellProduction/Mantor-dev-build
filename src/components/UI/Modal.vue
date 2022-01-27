<template>
    <form class="form" @submit.prevent="submitMessage">
        <div class="form__content">
            <h3 class="title-se form__title">Заявка на партнёрство</h3>
            <p class="form__descr">
                Оставьте свои контактные данные, мы свяжемся с вами в ближайшее
                время
            </p>
            <input
                type="text"
                name="user-name"
                class="form__input"
                placeholder="Имя"
                required
                v-model="user.name"
            />
            <input
                type="text"
                name="user-organization"
                class="form__input"
                placeholder="Название организации"
                v-model="user.organization"
                required
            />
            <input
                type="number"
                name="user-phone"
                class="form__input"
                placeholder="Телефон"
                v-model="user.phone"
                required
            />
        </div>
        <div class="form__bg">
            <img src="@/assets/images/partner/form-line.png" alt="" class="form__line">
            <div class="form__content">
                <button class="order__link form__btn">
                    Оставить заявку
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
                </button>
            </div>
        </div>
    </form>
</template>
<script>
export default {
    name: "Modal",
    props: {
        page: {
            type: String,
            required: true,
            default: 'для магазинов'
        }
    },
    data () {
        return {
            user: {
                name: '',
                organization: '',
                phone: ''
            }
        }
    },
    methods: {
        submitMessage () {
            console.log(`Заявка была отправлена со страницы ${this.page}`);
            let res = '';
            for (const key in this.user) res += `${key}: ${this.user[key]}\n`;
            console.log(`${res}`);
            for (const key in this.user) this.user[key] = '';  
        }
    }
};
</script>
<style lang="scss">
.form {
    background: #fff;
    max-width: 920px;
    width: 100%;
    padding: 55px 0 51px 0;

    &__content {
        max-width: 710px;
        margin-left: 65px;
        margin-right: 45px;
    }
    &__title {
        margin-bottom: 20px;
    }
    &__descr {
        font-family: "Roboto";
        margin-bottom: 51px;
    }
    &__input {
        display: block;
        width: 100%;
        margin-bottom: 34px;
        border-bottom: 2px solid #bebebe;
        padding-bottom: 14px;
        font-size: 20px;
        line-height: 29px;
        &::placeholder {
            color: rgba(0, 0, 0, 0.38);
        }
    }
    &__bg{
        position: relative;
        margin-top: 26px;
    }
    &__line{
        position: absolute;
        top: 18px;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: initial;
        z-index: 0;
    }
    &__btn {
        display: block;
        margin-left: auto;
        font-size: 15px;
        font-family: "Roboto";
        font-weight: 700;
        line-height: 24px;
        text-transform: uppercase;
        color: #010007;
        &::before {
            margin-right: 18px;
            position: relative;
            z-index: 5;
        }
    }
}
    @media(max-width: 1000px){
        .form{
            max-width: 720px;
            &__content{
                margin-left: 45px;
            }
            &__input{
                font-size: 17px;
                line-height: 22px;
            }
            &__descr{
                margin-bottom: 30px;
            }
        }
    }
    @media(max-width: 456px) {
        .form__line{
            display: none;
        }
        .form__content{
            margin: 0 21px;
        }
    }
</style>