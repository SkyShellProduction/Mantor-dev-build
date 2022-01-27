<template>
  <div class="navigate" :class="[getOpenMenu ? 'active' : '']">
    <Background :show="false">
      <div class="navigate-bg">
        <div class="container">
          <nav class="nav">
            <Logo @click="closeMenu($event.target)"/>
            <a
              href="#"
              class="header__btn"
              :class="[getOpenMenu ? 'active' : '']"
              @click="openMenu($event.target)"
            >
              <span></span>
            </a>
            <ul class="list">
              <li v-for="(link, i) in links" :key="i">
                <router-link :to="link.path" class="link"
                @click="closeMenu($event.target)">
                    {{ link.name }}
                </router-link>
              </li>
              <li>
                <CallOrder
                  link="link"
                  @click="openCallback($event.target)"
                />
              </li>
            </ul>
            <div class="nav__special-block">
               <ul class="footer__list">
                   <li>
                       <h3 class="footer__title">
                          <a href="tel:+73512171667">+ 7 (351) 217-16-67</a>
                       </h3>
                       <p class="footer__descr">
                           Челябинск, ул. Куйбышева 1А, оф. 2
                           <a href="mailto:tim@mantor.pro">tim@mantor.pro</a>
                       </p>
                   </li>
               </ul>
            </div>
          </nav>
        </div>
      </div>
    </Background>
  </div>
</template>

<script>
import ScrollNav from "@/assets/js/fixnav.js";
export default {
  data() {
    return {
      links: [
        { name: "О компании", path: "/" },
        { name: "Каталог", path: "/catalog" },
        { name: "Стать партнёром", path: "/partner" },
        { name: "Где купить", path: "/buy" },
        { name: "сервисные центры", path: "/service" },
        { name: "Гарантии", path: "/guarantee" },
        { name: "Контакты", path: "/contacts" },
      ],
      open: false,
    };
  },
  mounted() {
    let data = {
      elem: document.querySelector(".header .navigate"),
      top: 163,
    };
    new ScrollNav(data);
  },
  methods: {
      openMenu (e) {
        if(window.innerWidth <= 730) {
          if(e.classList.contains('active')) {
            e.closest('body').classList.remove('hidden');
                e.classList.remove('active')
                this.$store.dispatch('setOpenMenu', false)
              }
              else {
                this.$store.dispatch('setOpenMenu', true)
                e.classList.add('active')
                e.closest('body').classList.add('hidden');
              }
          }
      },
      openCallback(e){
        this.$store.dispatch('setModal', true);
        e.closest('body').classList.add('hidden');
      },
      closeMenu (e) {
        this.$store.dispatch('setOpenMenu', false)
         e.closest('body').classList.remove('hidden');
      }
  },
  computed: {
      getOpenMenu () {
          return this.$store.getters.getOpenMenu
      }
  }
};
</script>

