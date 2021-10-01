<template>
  <v-navigation-drawer color='primary' dark disable-resize-watcher mobile-breakpoint="10024" v-model="drawer" width="230" app>
    <v-list expand nav tile shaped class="pl-0">
      <div v-for="(menu, m) in menus" :key="m">
        <v-list-item v-if="!menu.children" :to="menu.to">
          <v-list-item-icon class="mx-2">
            <v-icon size='20' v-text="menu.icon" />
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="menu.title" style="letter-spacing: 1px; font-weight: 400 !important; font-size: 16px !important;" />
          </v-list-item-content>
        </v-list-item>
        <v-list-group v-else :prepend-icon="menu.icon" :value="false" active-class="active__class">
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="menu.title" />
            </v-list-item-content>
          </template>

          <v-list-item v-for="(child, c) in menu.children" :key="c" to="/" class="pl-14" active-class="active__class">
            <v-list-item-content>
              <v-list-item-title v-text="child.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </div>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    selectedItem: 0,
  }),
  computed: {
    drawer: {
      get () {
        return this.$store.state.drawer
      },
      set (val) {
        this.$store.commit('SET_DRAWER', val)
      },
    },      
  }
}
</script>

<style>
.v-application--is-ltr .v-list-item__icon:last-of-type:not(:only-child) { margin-left: 0 !important; }
.v-application--is-ltr .v-list-item__icon:first-child { 
  margin-right: 16px !important;
  margin-left: 8px !important;
}
.v-list--dense .v-list-item .v-list-item__icon { margin-left: 8px !important; }
.v-list-group .v-list-group__header .v-list-item__icon.v-list-group__header__append-icon { min-width: 30px !important; }
.v-icon.v-icon { font-size: 20px !important; }
.active__class {
  color: #fff !important;
  background-color: rgba(255, 255, 255, 0.2) !important;
}
</style>