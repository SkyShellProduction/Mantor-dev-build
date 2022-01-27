<template>
    <Background>
        <div class="error">
            <div class="container">
                <h2 class="title info__title">
                    Кажется такой страницы не существует!!!
                </h2>
                <router-link class="city__link" to="/"
                    >Вернуться на главную</router-link
                >
                <h3 class="error__title">Можете оставить заявку при желании</h3>
                <Modal page="Страница 404"/>
            </div>
             
        </div>
    </Background>
</template>
<style lang="scss">
.error {
    padding: 50px 0 100px;
    &__title{
        font-size: 24px;
        text-transform: uppercase;
        color: #fff;
        margin: 30px 0;
    }
}
</style>