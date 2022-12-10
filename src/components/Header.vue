<template>
  <sidebar-menu
    :menu="menu"
    :rtl="true"
    :collapsed="true"
    @update:collapsed="onToggleCollapse"
    @item-click="onItemClick"
  />
  <!-- <Modal /> -->
  <div class="px-5 text-right">
    <Mod />
    <CheckBattery/>
    <CheckNetwork/>
    <CheckLocation/>
    <CheckOnline/>
  </div>
</template>

<script setup lang="ts">
import Modal from "./modal.vue";
import Mod from "./Mod.vue";
import CheckBattery from "./CheckBattery.vue";
import CheckNetwork from "./CheckNetwork.vue";
import CheckOnline from "./CheckOnline.vue";
import CheckLocation from "./CheckLocation.vue";
import {Icon} from '@iconify/vue'
import { defineComponent, ref, onMounted } from 'vue'
const menu = [
  {
    header: "Main Navigation",
    hiddenOnCollapse: true,
  },
  {
    href: "/",
    title: "الرئيسية",
    icon: {
      element: 'img',
      class: 'mdi:adobe',
      attributes: {
        src:'https://api.iconify.design/noto-v1:house.svg'
      }
      // text: ''
    }
  },
  {
    href: "tithes",
    title: "العشور",
        icon: {
      element: 'img',
      class: 'mdi:adobe',
      attributes: {
        src:'https://api.iconify.design/vscode-icons:folder-type-mongodb-opened.svg'
      }
      // text: ''
    }
  },
  {
    href: "car",
    title: "السياره",
        icon: {
      element: 'img',
      class: 'mdi:adobe',
      attributes: {
        src:'https://api.iconify.design/openmoji:autonomous-car.svg'
      }
      // text: ''
    }
  },
  {
    href: "home-facilities",
    title: "مرافق البيت",
        icon: {
      element: 'img',
      class: 'mdi:adobe',
      attributes: {
        src:'https://api.iconify.design/noto:gear.svg'
      }
      // text: ''
    }
  },
  {
    href: "compliments-birthdays",
    title: "مجاملات و اعياد ميلاد",
        icon: {
      element: 'img',
      class: 'mdi:adobe',
      attributes: {
        src:'https://api.iconify.design/emojione:birthday-cake.svg'
      }
      // text: ''
    }
  },
  {
    href: "exit-release",
    title: "خروجات وفسح",
        icon: {
      element: 'img',
      class: 'mdi:adobe',
      attributes: {
        src:'https://api.iconify.design/emojione:pot-of-food.svg'
      }
      // text: ''
    }
  },
  {
    href: "analysis-doctors",
    title: "تحليل و دكاتره",
        icon: {
      element: 'img',
      class: 'mdi:adobe',
      attributes: {
        src:'https://api.iconify.design/openmoji:male-doctor.svg'
      }
      // text: ''
    }
  },
  {
    href: "other-houses",
    title: "البيوت الاخره",
        icon: {
      element: 'img',
      class: 'mdi:adobe',
      attributes: {
        src:'https://api.iconify.design/noto-v1:houses.svg'
      }
      // text: ''
    }
  },
  {
    href: "cairo",
    title: "القاهرة",
        icon: {
      element: 'img',
      class: 'mdi:adobe',
      attributes: {
        src:'https://api.iconify.design/emojione:cityscape.svg'
      }
      // text: ''
    }
  },
  {
    href: "emergency",
    title: "الطوارئ",
        icon: {
      element: 'img',
      class: 'mdi:adobe',
      attributes: {
        src:'https://api.iconify.design/openmoji:emergency-exit.svg'
      }
      // text: ''
    }
  },
  {
    href: "save",
    title: "التحويش",
        icon: {
      element: 'img',
      class: 'mdi:adobe',
      attributes: {
        src:'https://api.iconify.design/icon-park:safe-retrieval.svg'
      }
      // text: ''
    }
  },
];

const onToggleCollapse = (collapsed: any) => {
  
  if (collapsed || ( collapsed == undefined) ) {
    document.getElementById("body").style.marginRight = "65px";
  } else {
    document.getElementById("body").style.marginRight = "290px";
  }
};
const onItemClick = (event: any, item: any) => {
  console.log(event);
  console.log(item);
};
onMounted(() => {
  onToggleCollapse()
})
</script>

<style >
.v-sidebar-menu .vsm--link .vsm--icon {
    background-color: #ffffff !important;
}
</style>
