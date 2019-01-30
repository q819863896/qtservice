<template>
   <section class="page">

   </section>
</template>

<script>
   import {requestToken} from "../../api";
   import {urlParse} from "../../assets/js/urlToJson"

   export default {
      name: "AttachDown",
      data() {
         return {}
      },
      methods: {
         attachDown(urlParams) {
            let params = {grant_type: "client_credentials", scope: "read", client_id: "rajithappnew", client_secret: "secret"};
            requestToken(params).then(res => {
               let token = res.value;
               if (token) {
                  sessionStorage.setItem("token", token);
                  /*downAttachFile(id, name, type) {
                      console.log(id, name, type);
                      //type = txt xlsx xls docx doc pdf
                  }*/
                  let id = urlParams.id, name = urlParams.name, type = urlParams.type;
                  let typeSting = type.toString(), doc = typeSting.includes("doc"), txt = typeSting.includes("txt"), xls = typeSting.includes("xls"), pdf = typeSting.includes("pdf"), img = typeSting.includes("pg");

                  let Mime;
                  // Mime = "application/pdf";
                  if (doc) {
                     Mime = "application/msword"
                  } else if (txt) {
                     Mime = "text/plain"
                  } else if (xls) {
                     Mime = "application/vnd.ms-excel"
                  } else if (pdf) {
                     Mime = "application/pdf"
                  } else if (img) {
                     Mime = "image/png";
                  }

                  let param = new URLSearchParams();
                  // param.append("attaId", "P24AAAASuIj0r08D");
                  // param.append("attaId", "P24AAAAWVs30r08D");
                  param.append("attaId", id);
                  downFile(param).then(res => {
                     let url = window.URL.createObjectURL(new Blob([res], {type: Mime}));
                     let link = document.createElement('a');
                     link.href = url;
                     // window.location = url;
                     // link.setAttribute('download', name);
                     link.setAttribute('download', name + '.' + type);
                     document.body.appendChild(link);
                     link.click()
                  })
               }
            })
         }
      },

      created() {
         let urlParams = urlParse(window.location.href);
         this.attachDown(urlParams)
      },

      destroyed() {
         this.attachDown = null;
      }
   }
</script>

<style lang="scss">
   @import "../../assets/styles/message.scss";
</style>