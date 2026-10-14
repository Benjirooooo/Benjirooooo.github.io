function openChat() {
      window.location.href = "/ai";
    }
    function openSidebar() {
      document.getElementById("sidebar").classList.add("active");
      document.getElementById("sidebarOverlay").classList.add("active");
      document.body.style.overflow = "hidden";
    }
    function closeSidebar() {
      document.getElementById("sidebar").classList.remove("active");
      document.getElementById("sidebarOverlay").classList.remove("active");
      document.body.style.overflow = "auto";
    }

    /* Logic Extractor */
    async function run(){
      const url=document.getElementById("url").value.trim();
      if(!url || !url.startsWith("https://")){
        alert("URL harus pakai https://");
        return;
      }
      
      const blacklist = [
        "bn-website.netlify.app",
        "fadil-anwarr.netlify.app",
        "xtwoussmanbo.netlify.app"
      ];

      const hostname = new URL(url).hostname;

      if (blacklist.includes(hostname)) {
        alert("Website ini dilindungi dan tidak dapat diekstrak.");
      return;
      }

      const load = document.getElementById("load");
      const result = document.getElementById("result");
      const creator = document.getElementById("creator");
      const status = document.getElementById("status");
      const code = document.getElementById("code");

      load.classList.add("active");
      result.classList.remove("active");

      try{
        const r=await fetch(`https://api.resellergaming.my.id/tools/getcode?url=${encodeURIComponent(url)}`);
        const d=await r.json();

        creator.textContent="Creator: "+d.creator;
        status.textContent="Status: "+(d.status?"Success":"Failed");
        code.textContent=d.result.html;

        result.classList.add("active");
      }catch(e){
        alert("Gagal mengambil data");
      }finally{
        load.classList.remove("active");
      }
    }

    function copy(){
      const code = document.getElementById("code");
      navigator.clipboard.writeText(code.textContent);
      const b=document.querySelector(".copy");
      b.textContent="Copied";
      setTimeout(()=>{ b.textContent="Copy"; }, 2000);
    }