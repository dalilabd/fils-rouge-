<script setup>
import { useStore } from 'vuex';
const store = useStore();
import { RouterLink } from 'vue-router';
import { onMounted,computed } from "vue";

function logOut() {
  store.dispatch('logOut')
}


onMounted(() => {
  store.dispatch('getUsers')
  store.dispatch('getDocuments')
})

const Users=computed(()=>store.getters.getUsers)
const role= sessionStorage.getItem('roles')
const name_user= sessionStorage.getItem('name_user')
const Documents=computed(()=>store.getters.getDocuments)
</script>

<template>
    <!-- Main component -->
    <body class="font-poppins antialiased">
      <div
        id="view"
        class="h-full w-screen flex flex-row"
        x-data="{ sidenav: true }"
      >
        <!-- Sidebar Toggle Button -->
        <button
          @click="sidenav = true"
          class="p-2 border-2 bg-white rounded-md border-gray-200 shadow-lg text-gray-500 focus:bg-teal-500 focus:outline-none focus:text-white absolute top-0 left-0 sm:hidden"
        >
          <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        
        <!-- Sidebar -->
        <div
          id="sidebar"
          class="bg-white h-screen md:block shadow-xl px-3 w-30 md:w-60 lg:w-60 overflow-x-hidden transition-transform duration-300 ease-in-out"
          x-show="sidenav"
          @click.away="sidenav = false"
        >
          <div class="space-y-6 md:space-y-10 mt-10">
            <h1 class="hidden md:block font-bold text-sm md:text-xl text-center">
              Dashboard<span class="text-teal-600">.</span>
            </h1>
            <div id="profile" class="space-y-3">
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PEBAPDw8PEBAPEA8QEBAPDw8VEBUPFRUWFxcRFRYYHSggGBooHhUWITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OFxAQGi0mHyUtLS0rLSstLS0rLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAACAAMEBQYBBwj/xABDEAABAwICBwQIAgkDBAMAAAABAAIDBBESIQUGMUFRYYETcZGhByIyQlKxwdEjchRDYoKSorLh8DOTwhVT0tM1RHP/xAAbAQACAwEBAQAAAAAAAAAAAAAAAQMEBQIGB//EADQRAAICAQIEAwYFBQEBAQAAAAABAgMRBCEFEjFBUWGBExQiMpGxQnGhwfAGFTPR4VJDJP/aAAwDAQACEQMRAD8A9UU5AJACQAkAJACQAkAJACQAkAJIBqpqGxtLnGwHiTwHNd1wlN4RBqNRCiDnN7EPRleZnPBAAABaBttfO537lYv06qimZvD+JT1V04yWFjKXqWKqmyJACQAkAJACQAkAJACQAkAJACQAkAJACQAkAJACQAkAJACQAkAJACQAxXVkcDDJK7C0eJO5oG8ruuuVkuWJHbbGuPNIpdBabkq6hzbBkTY3ODdribgAuPXYPNXNTpY01J9Xkz9NrJ3X46Rw9i30lXx07MT9pNmtHtOdwH3VSqmVssRLuo1EKIc0jK1WkXzynFk0D1WDYNl+881sVURqht1PJa3VT1OJS6dkSdH1XZPDt2xw4tO3/OS4uh7SDRX0ep93ujZ9fyNZE5rwHNIIOwhY0k4vDPc1WQtipweUzuFLJILCgBYUCOEIAVkAcTASAEgBIASAEgBIASAEgBIASAEgBIASAEgBIASQAyyNY0veQ1rQXOcdgAzJKaTbwhSkorL6HmmnNMOq5cWYjaSI2cBf2jzNvovQ6ahUwx37nndVe7p57di21DkAqHN+KNwHQg/RV+IrNSfmd8OeNQs90/2f7EbSleairc6/qMLmRjdhbfPqc/DgutPWq6ku7KnELnZOT7LZASuwua/oVI5bGclzRaJ8ZBFxsKqymQcuCVTVD4zdji3u2HvByKgm4y6k1N91LzXJosoNNSbHBru64P28lVlCK6GpXxy+PzpP9Cwh0pG72gWHnmPEfZRNGnRxmie004/YmtIIuCCDsINwkasJRmuaLyiljru2qGtB/Da44eZAPreIyUXPmWDH94d+qivwp7efmXRClNoEhAAkJiOWTASAEgBIASAEgBIASAEgBIASAEgBIAVkgCAQMx/pB0phDKVpzeO0lt8APqt6kE/ujitLh9WW7H6GZxC3ZVr1MNSyXBG9rnDzWrkyZLcuNCVRima4bcwOo/zxUN0VODTOOd1tTXYZpnYXC+VjY/JRORDOPNEti0EWKhlMqL4dxqJ7ozby3d6qzmSuCmskyOtG8EdyrysI/YskR1DDvt3qGVgeyZPhIP3VedmCWFedmSI3OaCGkjECDbnl4rj2xaplZVnkfUgMjdC5pG4gtPMKpZc47lqhfEpLqjWU8okaHjYR4HeFpU3RtgpI9FF5SYZClGCQgASEwBIQI4gBJgJACQAkAJACQAkAJACQB0BIAwEhhAIA8e1jrO2q6h98u0cxv5WeoP6b9Vv6ePJVFGDe+e2T/mxVF5ZJfc4ZrtvDIlHmjgsYn7HNOyxBSbK7j2Za1lPjaJoxtF3gfP7qnKWHgrVy5ZckhUVYPZflwP3VeUx2U90WXZhwzzCrzmQpNME0R909D91VnInjLxBNO9uZabcdyqzmTRimOQuc03aSFWlYSqvJd0U/aCxFnDbzHEKpO7lZarp5kSHRgixUcruZYJI1YeR7RkvZuwH2XnLk7j9PBR6DXewv9nN/DL9Ga9MW4lyQvVnYJCBAkIAEhAAkJiBTASAEgBIASAEgBIASAOgJAGAkMMBABNCAPB6hxxvvtxuv33N1vxfwowZR+JhSR4289yct0RR+FkemqXRm27eCq7lg7lDmNNoDSTScGLJ2wHaHKC7dZRRvofUsq3RIfd0dmu3t90/ZZ7sOK5tbMqxJLCcPrNI907PDZ1UUpJljkjIn02l/jbfm3b4FVp+Q1Si80fUxyew4HiN46KhdJk9VWGSpdHMdmPVPEbOoWdPU4L8dNnoQxG+F43EeBCrzuU0SwqcJF1GQ4Bw3qmr2nhl10KSyiPU5Ec/mFW1DzuW9LW2vyLmgnxs25jI/Qr2XBtd7zRiXzR2f7P1OL6uSXkSCFsEAJCBAkIAEhAAEJiBTASAEgBIASAEgDoCQBgJDDAQBV6waQMDIy02MkoaL8mudb+VWtLUrJNPwK2qtdcU14k3RtaydmJu33m72n7c1FdVKqWGSU2xsjlHkWuujjS1szSLMlcZozuLXkkjo646DitCizmgvIz9RXyTfmVlHOPZJtfYefAqbmKlkH1Q/UUeLk7596jmsnEJ4K+VjmHMEHcfsVVk2iympLYutGa1TR2bIBK0bMWT/AOLf1BVO2pS3RFKiL6GlpdL0dWBG84HHY2SwN/2XbL9eizroW17rc5jVhkfSehJIbvZd8YzOXrNHMbxzCqR1cJvlezLHsmlkrYpSCC0kEZgg5pzZ3GBq9AaYE34MtsdvVOwOG8cisTX1uC549O5paVp/CyyYRIHRv9phIvvsPeWPK1xxJGl7JSWGR4KgxksPHI/ULmc+ZcyO66sbMb0hN6mLeCDfyXNWXLBf08FzYJGiNIYSCdnvflP2V7Qap6PUKf4Xs/y/4LVafmjg1C+gxaayjCawCQmIEhMASECBIQA2QmI4mAkAJACQB0JAGAkMMBABAIGZn0kUpfQPkaCTTPZPltwi7XHo15PRWtFZyWrzK+pq9pW0eeaP09Ux2fFM4G22zT0NxmtydddkcNGLGU63s9yJrJp2sqsH6RI17GEluGKNticjmBfzss+enVLzHoXFe7tpdSmEi55shy4J1JpVzLNeMbe/1h3H6LlyIp6dS3Wxc0tTTTC3aNF/dkAB88j0UFk34FaVdkOw9Jq1G8Xje5l9lhib/nVUp34OoXSXUqa/QFTEC7D2jRvZckDm3b81EtRBvGS1CSkTdWtb5actjld2kOwYzmzudwWfr+Hxui5Q2l9y1VJxe/Q0ek6SGdpnpTZwzkh394HHuyPftw6dXZTJVX9OzLktKprmr9UZ5lWQQWmxBBB3gjer80pJpkUIYeS+k01d0Mt7do4Yx0wu88+iwfdMc8PDp+xtQmsKRZVU2QdvB8lTrj2JiNX1XqW4kfdS1VvmLmljmeRvR9RYjncLu6vKLlsMo3Wg5ccDL+7dvQHLysvYcGsc9JDPbK+h5rWw5bWTiFqlQ4QgQBCYAkIEAQgACExHEwEgBBIAmhADgCQwwEAEAkM5LE17XMeA5r2lrmnYWkWIPRGcAeA6yaMl0VVPp34nQuu+nkPvQk5Z7yNh5i+whbGn1OUZ+o0ybygIKhrxkQeSuqyMlsZ0q5Qe4EtC05tOE8Pd8Nyq2adPeOxLDUNbS3Iz6KUe7fm03/uqsoTXYnVtb7jLopG+48fuuUTydpxfRo7HWuj9lz2H9gkHyUMlkfJksqPW2pjtaYuHCVod5+15qldpK7FuvoNVYG9LaRiqvxBEIpvf7M/hycSW7Wu5533qCmqdD5XLMfPqidJNEzQWlHtaCHEOYcN+W7pu6KhrtNGUmmtmWaZyjuupN0tI11p2DCHm0jR7su245Hb0KpafmhmqXbo/Ff8ACxdBSSsj36+TK8VVwG/Di81061ls7g9jTvr7xNJObmsPyKyFS/aNF2pObSRCdVFx7tinUOU3aalXHCJlJJm3vChtWzOprZnpOr0RbTx32uu/oTl5WXq+E1OvSwz33+p5TXT5rpY/IsSFplQEhAAkIECQmABCBAOCBALoBIA6EgHAkMIIAcCQwgEDCsgCq1k1ep9IwGCoabbY5G2Ekb/jYfpsO9dQm4vKE1nqeC636tS6LqBCZo5sTcbDESJAzd2jPcJztmb2VmOpi3u8M492m45Syipj0pM33/4gD881YV0uzKktNDO6wPN1gmHwdW/3XLtkzj3SvzHma0TjdF/C7/yUcm2cvSVeZIZrdJsfFTvHAtd9XFQSryNaaC6NidpXR8wtNSPhO6Ske3LmWOAafmqs6rlvB+jJoR5eryVlZAGevFIJor2EgaWuB4PYc2nxB3E5pxk3tJYf86MmwStFykNJ4lVNSstIkhsWLah7mujY1z3Pw2axpcbhwINhyxeKozqWVLwLEJ7OPiXOhdStI1AB7LsGfFUEsJ7mWLvEKCyyEe52kzWs9Hs2EB1VGCBYAROcPEkfJU8rOS/p9TGrtko9Mav1FEQZcLo3GzZGElt/hN82lKSTWxsafVQu2XXwD0VGXHEchuVS1bYJrHhYPTNCaSbOzDkHsABaNhbsDhy+S9Rw7Wq+HK9pLt+55fV6Z1Sz2ZYlaRSOFMASgASECAITEAQgAHBMQKADaEAGAkMMBIYYQAQQMIJAMaRqOxhlmtfsopJbccDS63khnSWXg+YazSElRI+eZ2OWVxe93Fx4cAMgBuAAVVm0kopJDbQXkNAxFxAA4k5AI5uVZyHKpbYPQNH6Cp442MdDC9wHrOdGwku35kbFhW666U21JpfmX46OlRw4r6E6PRlMNlPAO6GP7KvLU3PrN/U692pXSK+hMjpIf+1F/ts+yjd1n/p/UTqh/wCUPt0dTu9qngd3wxn6JK+1dJP6kM6a3+FHJtVdHzAh1LE2++Idm7xZbzU0NfqYP52/z3Klmkpf4SHH6N6YnKpqAz4bRYrfmtbyVj+6TfWKyUXo0n1NvoDREFHH2dOzCCbuJJL3O4uO/wCQVSd07ZZkzr2aisIuGlCOGEmBH0hRsnifC8AteLZi9jtDuhseiR3VY65qS7Hm7SWOLHCxYS0jgQbEKu0el2klJdyy0XWOjlje05hwB5tJsR4LvT2SquhKPiv1KuoqU65JnojgvbHlgSgQJTAEoAEpiAIQIbITAGyBBtSGGEAGEhhhAwgkAQQMbrIO0ikj/wC5G9n8TSPqhjXU+TYyQADkRkQeKrmznJodS6ftKoOIuImOf+9k0f1E9FS18+Wlrx2LGmjmZ6EAsA0Q2hIQ8xcs4ZKiXJFInQJEEiwhKZWkidE5dJkEkSmOUiZC0OXTycnQUsgecaztwVkwGwlrv4mtJ8yVyz0eifNp4g6H9eeBvGWPwxC/knRDmugvND1Pw1Tfkz1Er2h5AAoA4UCAKYAlAgCmIAoAFABNQAbUDDCQBBAwwkAQQMIJAfLOtlIafSFbCcsFTNb8jnFzfJwUL6mrU8wTLb0eu/GmHGIHwcPuszif+OP5l7SP4mb2yxC8E0JCHmBcs4ZKjCRGyXCkQyJ0RQQSJkTk0yCRKYV0mQyQ6CusnDCBRkR5vrfJetm5CMfyNXR6Th6//PH1+5I1Ljx1kfCNsjz0aQPNwVvh0ObUJ+GWRcUly6d+eEemL055YEpiBKBAFMASgQBTAAoECgAggA2oGGEgCCBhhIAggYQSA+fPTTo/sdKukAs2qhilvuxtvG4fyNPVRT6mhppZhggejqAmeWTcyLAe97mkf0FZfE5pVqPi/saOkXxNlzrlrC+lDYoSBK8Yi4gHAzYCAcrk328Cqeh00bMzn0JtRa4/DHqZ6j1urm7ZGSfnjZ/xsr09FQ+2PyZBG2zxLik11qB7cMLvy42/MlVpcPq7Nkisl3Nfq9puOrBDQ5j2gFzHWOR3g7ws/UaZ098o6zkv42qsRtkuMJMhkUOsuucVC7smxmabCHFuINY0HZidY577AeCt6fSO1czeEJVuW5k6n0n1/wCripWDdiZK4+OMfJX46CldWxPTruU1Z6RdLuN21TYv2Y4ILfztcfNWYaTTrscPTo9U9HetR0nTF0ga2ohcI5g3JpuLtkaNwIvlxaVl6yhUz26MrTg4soddISysed0jY3jww/NpVdPY9Dw2XNQl4ZLr0a093TzW9lrIwe84nf0t8VscIr+Kc/Qo8antCHqb1bZ58FyBAFMQJQAJTAApiAKBAoA6EAG1AwwkMIIAMJDCCAOTTMjaXPcGtG8/LmuZSUVlncISm8RR5f6YdGsr2UctPI3HHLJC8m4syRuK7ha+2IAc3JVJXyUYPcksnLRwlOyLwvAz2gqSPR8Ja+Vpc95c5xyvkAGgX3W8yrk+A02yUrpN47Lb/plr+odZZmGkq9er/ZDNVX6Pe8yPh7Z+QxGIHIbLY9i0KdFpaYqNcF9/uQvT8Z1Dbss5c+eP0Q3/ANWpvdpQB+WMfJT8tS/Avohf2XXPf2/6yA/S6Z22nAPHs41FPT6afzVoljouLU/Jfn1f7omaN0y2mcTHBEWnI2aWyYeGL+yyNZwPT3/JJx8O6+hOuJ6/TY94jlfzutjfQV0Jax5ljbja1wDpGAgEXzz5rxk9FqIycVBvDx0Zux1lUop8y38ztZpaGKJ8oeyTAL4WSMJJJAAy713puHX3XRrcXHPdpkOo1tddcppp47JmB0ppVlTIZJKenDjYEiMueQMvWJNibcl7PS8G01EUpNy/P/Rix1/E9Qn7BYX87sjNqKcG4p2/7cQWnGGlhtGtfQhlw3i1u89Rj1f7YHf06mOTqVpH5Iium6H+BfRHH9l4jHdaj9ZFhoTS9PSPc+mYIDIAHjs24XAEkXA7znzVW/QaHUrlsh9Nvscz0/G6t1Ln9U/vhllpasNcI3kxhzA5uJl7EGxsRfIj6rIt/perDdFj/J7/AKotcP8A6ov0UnXq6evhs/o/9mv1JjZTUje0cA+V8khGZyvhadmyzQeqqUxjoouqyS5svJuam/32Ubq0+VpYz57mna4EAggg7CNivRkpLKKLTTwxFMQBTECUCAKYAlAgCmIFAHQgA2pDDCBhBIAggYYSAzetUpxsZuDMXUkj6Kjq3ukbHDorlcjM1sAkYWnkQeDgbg+ICr0WuqyM12Zc1NCvpnW+6wYfTrMRYT7uNp8vsV7lyUkmjxv9PfA7qn1T+2UVzYlyemHWxJCHGxJDwOthyceDHn+U287LiXQp8RS92nnwIdDoeapuYmAgGxc4gC/Dme5UNRrqqHib3MPTcPu1CzBbeIFTo6ame1srMOL2XAgtIHAj5KXTauu9ZreSLV6SzT7WLBavgsSOBPgpM5PUadJVQS8Ec7JGSYXZIyI72SWRlpoJl3dmNr3MHjldTKxVVTsfZZPJcfj7fV00x77fVnoLGAAAZAAAdw2L55KTnJyfV7nr4QUIqK6IudCPJD27gQR1v9lq8Nk3GUSjq4rKZZFaZTAKYgSgQJTAAoEAUwBQI6EAGEhhhAwgkAQQMIIAz+tcH+nJuzYfmP8AkqOrj0kavDZ/ND1MzK+yoNmxFGQ09GBM4bnWe3rt87r1/Dbva6WPitjxltfunF34T/f/AKQGwq4b462JIMDrYkh4ArvUjd+0Wt88V/5fNcSZlcYs5aFHxf2PTNRqAQ0MGVnPZ2juPrku+q8lq5c185ef2LGnXJRCPkvq9yv9JtAH0gmAGKGRhJtnhPq/VTcMny6heexX4lHn0sl4b/7/AEMbTjHHG/ixoPe31T8r9V6J7Mm4bYrNNHy2D7FBeF2SQC7FLIyZqaMdS5/uxsJ6k2b5X8FU41f7LSci6y2/dnmtDD3viErn0jlr7I3TH3XjT1TWC80JHZhd8Ry7h/e62uHQxW5eJmauWZY8CwK0CoAUxAlAgSmABQIApgCgR1qADagYYSGEEgCCBhBADVfSiaN0Z94ZHg4bD4qOyCnFolptdc1JHnNfG5pc0iz2Egj5rEti1seqqkpJNdGZjWWMuibMAfw3YX/ldsJ6i37y2OB6jllKt990ee/qXStxhdHrH+fcZpAJGB7cxsPJ3Ar0eTrR6qGogmn8XdD4hRkuYHmQrlsHhLLKzD+mVEcEebAfWI2WJGJ3yA/uququVNbm/T8zzljev1ahH5V9l1fqe3U8IY1rBkGtDR3AWXlWa0nuRtNUInpponbHxuHPZfJKM3BqS6rcElP4ZdHt9Tx3RknYSvpZvVcHeqTsxfYixH9162uyN1asj3MjQ2e5XTot2X8+5dmDkmej2e6F2KQYIGnJxDEbmzpLtbx5kdycFuZvEtUqqnCL+J7fkWuqlK6Gna9wIdUfiDLPs8wz6nucF5fjmo9peoLpH79yXgWl9nQ5vrJ/p2NZQROeWsHtOOfLn0WXVW7JKKNK6ainJmuijDWho2NAAXpoQUIqK7GFKTk22dK6OQSmIEoEAUwBKBAOTECgBBABhABhIYQQMIJAEEDDCQGa1w0ZcfpLBm0ASgfDuf02HlbgqGspyudepr8N1GH7KXoZSENdiY4BzXtIc0i4I4ELPqk4yyupr2wU44ksoop9U3McX0dQ6En3XF1rcMQzI5EFblXFmliyOfNHnb+Brm5qZY8n/sD/AKTpbdNTHmWR/wDqVhcVp8H/AD1If7fr1srP1Y4NWq6YYaisY1h2tibtHAgBoPVRz4vBfLF+of2i+z/LZt6sv6DRMVGxpgaS4EOc92b3EZgnlyHFZGo1Nl8uafouxr6PR00RcIrr1fdmnotY4XC0gMbu4ub0tmovaLucWaKa+XcKq1gjtaIFxPvEWb4bSoZXL8IoaOXWexR6S1WgrYh2odHKL4JWWxhvwuBycOR4m1rqfR623TfL08CvrtLXqHv18SgdqfpWIYYK2GRo2dqDe3CzmvsOV1sR4zS/mi0Zi0Oor2rn90ANW9OHI1NIwcQGX8orrp8X0/ZMfumrltKf6ssNE+j9gkE1dO+rkuDhNxH3OJJLhyyHJUtRxecly1rHn3JauGQi8zeS9rZfxHAZAWaAOQssGbeTeqhiCNDoChLGdo4etIMuTN3jt8Ft8P0/s488ur+xl6y7nlyroi1K0CkC5MQBQAJQIEpgAUCAKYAoEdCACCADCQwwgYQSAIIGEEgOloIIIBBBBB2EHcUNZOk8PKM5XaswRslljMl2tLmtLgWi2Z3XOV9pVGWkhFOSNSriFkpRjLBnAVVwarDBSwIMFLByONcjByzoia45hNiy10LCmhYzY0A8d6hkQTk31ZKDlG0RYO4ksBg5jRgMAl6MBgsW6Agx9ocRN7lpIwYuOy/S61o6CpSUn9OxTets5eUtFeKZwoAApiAKABKBAlMASgQ25MRxACagAwgAgkMMIGEEgCCACBQMIFIBPaHAtOxwIPcUmsnSeGmedTRFjnMdtY4tPeDZZbWHg9PCalFSXcQK5wMLySENSUcz/YqCzl2bT5iyfLkXtFHrEjO1fq3bKhrvzukH0K5cQ95gvwkul1brG/8A2gz8jpT5ZKNxOJaut/hyW0NFNEPXqjJfd2TB55rlrBA5xn0jj1JIP+FcM5wLEkPA9RMxyMHME9wzKm08OexIiulywbNGt0yDhQAJKBAlMASgQJTAEoEAUwAKBAoAQKADCACCBhhIAggYQQB0JDCBQAYKQzM61aNN/wBIYMshIB4B/wBPBVNRX+JGrw/Uf/OXp/ozrSqpqBhI5HozZITWR1tbKz9W144h2E9QboyROqL7kmPSUzv1bWDmcTui4Zx7GK7hYyTcm5UTHhLZBgrkWDhckBeaHpMDcbh6z93Bv+fRa2jo5I8z6szNVbzPlXRFirhUOEoEASmBwoECUACUwAKBAlMACgRxAAtKYgwUhhhABgpDCBQB0IGEEgCQM6CgDpAIsRcHIg7LcEhrboYLWU09NUCFriMbA8g+y25IAv0O1VLdO8c0T0WidltLnLtsMNKqko8xcsTHmLk4YYK5YhxpXLEG54AJJAAzJOwLjAsZJmrToajG8HF2Tg3CRYZi4dzG3wKv6XTp/FIqa92VYj4o0l1omUcJQIElMASgASgRwlMACUCBKAAKYgSUABdMDgTEOApDDBSAIFAwgUgCBQMIFAHbpAdugZ3EALkgAZknZbigaPHdYav9Iqp5QbtdIQwg3BY31WkcrAHqpUtsHttBWoaeEfL7jdFpB8OXtM+E7u47lR1FGHkq6ip1SyujNFRVbJRdh7wfaHeFSlFogTTJrVGJhBIQ3PWNj25u+EbevBCi2cspdJVzpPVJy+EbAFKoqJb0tW/Oyw1Jr2w1OB7w1s7cAxEAGUG7B3+0Oqs6d/Fgg4vBSpUvB/c9EJV08ycJQBwlAAkoEcKYAkoECUAASmIElAAEpgCgQkwOtKQDgKQwgUAECgA7pDOgoGECgBupqWRMdJI4MYwXc52wBCWRo8w1r1tfVkxRXjp72tsdJzfwH7PjysQhjdksY4KOnzb3ZIktz1vDLufTpd1sPhiTimsMvSSksMEBzDdpItsINis66lw/Ix76HU8roT4dJz/H4tb9lWcIkOWSBXzO989A0eYS5EGRuR+Hbm4/5cpk9NLsfkMNzzXJo4SWEZzXSbKKIcTIemTfmfBWdPHqzG4tZtGHqarUH0kFuGl0i8luTYqtxzHBsx3j9vx4q0YMo+B6wHXzTIzhKYHCUACSgQJKABJTAElAhtxTAFMQkAJACQATSkAYKQwgUAGCgDoKQxqurYqeN0szwyNguXHyAG8ncAmk3shpZPJtaNZpK59s2QMP4cV/5322u8hu3k2YQ5SaMcFKCujolUTsyOPzCTRr8It5bHDx/YngLlHoQw1NpNYZzJJrDCa0BZ12mcd49DPu0zjvHoC+rAybmeO5VMHVOkb3nsNscSbnMpMvcqisIksC5OGYfT0/a1EjtzTgb3Ny+dz1V+qPLFHltbZ7S6T9PoQcCkKpvNQNeXUeGlq3OfS7I35l8PLiY+W0bsskziUcnsMcrXtDmODmuAc1zSC0tOYII2hMiOkoECSgDhKYAEoEA4pgAmISAEgBIASAEgA2uSAIFIYQQBQ6b10oKMlskwkkGXZQ2e8Hg62TP3iF3GuUhpHm+sesU1fJif6sTSeziBu1vM/E7n4WU8YKKJ0sFW0ro6HAUgHIn2IPAoJqbHXOM/BlyFyewTTWUcbKDfCQ6xsbEbeBVe7VQq27nPMuwzLE923ZwGxZ1msc+py2wWUxChdqY1JodHqkBxAxZC52nkmnzdDrmTDrajsonv3tabfm2DzIThHmkkV9TZ7OuUjC4VpHkggxABhiYGo1R1yl0d6jwZaXMmO4xsJ2ujJyz+E5HlmS0jiUcnp+gtbKGusKedpkP6mT1Jv4Dt7xcc0YwRYLklAgSUCAc5AgCmAkwEgBIASAEgBIAjV1fDTtxzyxxM+KR4aCeAvtPIISb6AY3S/pPp47tpYnzu+N944u8AjE7usO9Sxob6nXKYbTetldWAtkncxh/VQ3ZHbgbZuH5iVMq4o6wZ7DbK1l0MkQ1jm5e0OB29CkzpMn01ax+QNnfC7J39+i5ydJkwFB0HjA2rlvAFfpOvlNmBxDLbBlfvO9QTe5tabUynUo56bEvVSuDHuidskF2/nG7qP6Vl8RrbgprsW6Zb8pqxM3gFic0vEt8rOiZvAJc8vEXKzK6fq+1lsPZjGEd/vH6dFt6Otxry+rImyDU6QeWCJziW3BzzOW6/D7K5CCzkzeJXPlVfqMBqlwY4YagCLPXxtyHru4N2dSmkJsiSVLn7chwGxdpHLYcLN56d67QjXaF12r6azRL20Y/V1F35cnXxDxtyQ4picUzdaI9ItJNZs7XUzzvPrxX/MBcdQBzXLgzhxZqoJ2SND43tex2xzHBzT3EZLnBwOIASAEgBIASAEgBIA8R9KH/wAk7/8AJvzVyn5DtGaauxjjUDBl3JMBsLljI1X7Te8fNRT6gamLYO4LrsSjc/tKOXUCDpD3ev0UcjQ0P4gNG/60X52/NVtT/il+RpVfOjYheXNQIJAZI7T3lemj8qKT6kWp9roFPDoYnEP8voO0uzquiiBpX/Rf3IEyjgXSOCSxdATY9y6QD7V0A6ExG79FP+rUdzfkFxZ2OJnpajOBIASAEgD/2Q=="
                alt="Avatar user"
                class="w-10 md:w-16 rounded-full mx-auto"
              />
              <div>
                <h2 class="font-medium text-xs md:text-sm text-center text-[#f97c92]">
                  {{ name_user}}
                </h2>
                <p class="text-xs text-gray-500 text-center">{{role}}</p>
              </div>
            </div>
            <!-- Navigation Menu -->
            <div id="menu" class="flex flex-col space-y-2">
              <a href="" class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-[#f97c92] hover:text-white rounded-md transition duration-150 ease-in-out">
                Dashboard
              </a>
              <RouterLink v-show="role=='admin'"
              to="/Permission" href="" class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-[#f97c92] hover:text-white rounded-md transition duration-150 ease-in-out">
                Gestion Permission
              </RouterLink>
              <RouterLink v-show="role=='admin'"  to="/Role" href="" class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-[#f97c92] hover:text-white rounded-md transition duration-150 ease-in-out">
                Gestion Role
              </RouterLink>
              <RouterLink  to="/Document" href="" class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-[#f97c92] hover:text-white rounded-md transition duration-150 ease-in-out">
                Gestion Document
              </RouterLink>
              <RouterLink v-show="role=='admin'" to="/User" href="" class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-[#f97c92] hover:text-white rounded-md transition duration-150 ease-in-out">
                Gestion Users
              </RouterLink>
              <a href="/Categories" class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-[#f97c92] hover:text-white rounded-md transition duration-150 ease-in-out">
                Categories
              </a>
              <a @click="logOut" href="#" class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-[#f97c92] hover:text-white rounded-md transition duration-150 ease-in-out">
                se déconnecter
              </a>
            </div>
          </div>
        </div>
  
        <!-- Main Content Area -->
        <div class="flex-1 p-8 bg-gray-100" >
          <!-- Table Section -->
          <div class="bg-white p-4 shadow rounded-lg mt-9">
            <h2 class="text-gray-500 text-lg font-semibold pb-4">Last Documents</h2>
            <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
            <table class="w-full table-auto text-sm">
              <thead>
                <tr class="text-sm leading-normal">
                  <th class="text-start py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Name</th>
                  <th class="text-start py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Description</th>
                </tr>
              </thead>
              <tbody>
                <!-- Sample Row -->
                <tr v-for="Document in Documents" :key="Document.id" class="hover:bg-gray-100">
                  <td class="py-2 px-4 border-b border-grey-light"><a :href="'http://127.0.0.1:8000/storage/'+Document.path" target="_blank">{{ Document.name }}</a></td>
                  <td class="py-2 px-4 border-b border-grey-light">{{Document.category.name}}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <br>
          <div v-show="role=='admin'" class="bg-white p-4 shadow rounded-lg">
            <h2 class="text-gray-500 text-lg font-semibold pb-4">Last User</h2>
            <div class="bg-gradient-to-r mb-6 h-60 overflow-y-auto">
            <table class="w-full table-auto text-sm">
              <thead>
                <tr class="text-sm leading-normal">
                  <th class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light text-start">Name</th>
                  <th class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light text-start">Email</th>
                  <th class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light text-start">email verified</th>
                  <th class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light text-start">created at</th>
                </tr>
              </thead>
              <tbody class="">
                <!-- Sample Row -->
                <tr v-for="User in Users" :key="User.id" class="hover:bg-gray-100">
                  <td class="py-2 px-4 border-b border-grey-light">{{User.name}}</td>
                  <td class="py-2 px-4 border-b border-grey-light">{{User.email}}</td>
                  <td class="py-2 px-4 border-b border-grey-light">null</td>
                  <td class="py-2 px-4 border-b border-grey-light">{{User.created_at}}</td>
                </tr>
                <!-- Add more rows as needed -->
              </tbody>
            </table>
          </div>
          </div>
        </div>
      </div>
    </body>
  </template>
  
  <style scoped>
  /* Add any additional styles here */
  </style>
  