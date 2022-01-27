<template>
    <div class="callback" @click="closeCallback($event.target)" v-if="getModal">
        <div class="callback__content" @click.stop>
            <span class="callback__close" @click="closeCallback($event.target)"
                >&#215;</span
            >
            <form class="callback__form" @submit.prevent="submitPhone">
                <h3 class="callback__title title-se">Заказ обратного звонка</h3>
                <p class="callback__descr">
                    Оставьте свои контактные данные, мы свяжемся с вами в
                    ближайшее время
                </p>
                <input
                    type="text"
                    class="callback__input"
                    placeholder="Имя"
                    v-model="user.name"
                    required
                />
                <input
                    type="number"
                    class="callback__input"
                    placeholder="Телефон"
                    v-model="user.phone"
                    required
                />
                <div class="form__bg">
                    <img
                        src="@/assets/images/partner/form-line.png"
                        alt=""
                        class="form__line"
                    />
                    <div class="form__content">
                        <button class="order__link form__btn">
                            заказать звонок
                            <svg
                                width="167"
                                height="19"
                                viewBox="0 0 167 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                class="order__svg"
                            >
                                <circle
                                    cx="165.5"
                                    cy="17.5"
                                    r="1.5"
                                    fill="#0070FF"
                                />
                                <path d="M1 1L17.5 17.5H164" stroke="#0070FF" />
                            </svg>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            user: {
                name: "",
                phone: "",
            },
        };
    },
    computed: {
        getModal() {
            return this.$store.getters.getModal;
        },
    },
    methods: {
        submitPhone() {
            for (const key in this.user)
                console.log(`${key}: ${this.user[key]}\n`);
            for (const key in this.user) this.user[key] = "";
        },
        closeCallback(e) {
            this.$store.dispatch("setModal", false);
            e.closest("body").classList.remove("hidden");
        },
    },
};
</script>
<style lang="scss">
.callback {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.74);
    z-index: 300;
    &__content {
        max-width: 728px;
        width: 100%;
        background: #fff;
        position: relative;
        padding: 55px 20px 53px 0;
    }
    &__form {
        padding-left: 65px;
        max-width: 517px;
        width: 100%;
        .form__content {
            margin-left: 0;
        }
    }
    &__title {
        font-size: 31px;
        font-family: "Roboto";
        line-height: 48px;
        text-transform: uppercase;
        margin-bottom: 20px;
    }
    &__descr {
        font-size: 18px;
        line-height: 24px;
        font-family: "Roboto";
        margin-bottom: 29px;
    }
    &__input {
        display: block;
        width: 100%;
        padding: 14px 5px;
        margin-bottom: 34px;
        border-bottom: 2px solid #bebebe;
        font-size: 24px;
        line-height: 29px;
    }
    &__close {
        position: absolute;
        top: 45px;
        right: 63px;
        font-size: 50px;
        cursor: pointer;
    }
}
@media (max-width: 960px) {
    .callback {
        &__content {
            max-width: 600px;
            padding: 40px 20px 40px;
        }
        &__form {
            padding-left: 20px;
        }
        &__close {
            top: 10px;
            right: 20px;
        }
        &__input {
            font-size: 17px;
            line-height: 22px;
            padding: 8px 5px;
        }
    }
}
@media (max-width: 730px) {
    .callback {
        &__content {
            max-width: 300px;
            padding: 35px 12px 35px;
          .form__content{
              margin-right: 0;
          }
        }
         &__form {
            padding-left: 0;
        }
        &__input{
            font-size: 14px;
            line-height: 17px;
        }
        &__title{
          font-size: 16px;
        }
        &__descr{
          font-size: 14px;
          line-height: 18px;
          margin-bottom: 10px;
        }
        &__close{
          top: -6px;
          right: 8px;
          font-size: 40px;
        }
    }
    .form__line{
      display: none;
    }
}
</style>
