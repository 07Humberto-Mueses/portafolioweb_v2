export const footerActions = {
    phone: () => {
        window.open("https://wa.me/573167352884?Hola%20Humberto,%20quiero%20saber%20más%20sobre%20tu%20trabajo","_blank")
    },
    linkedin: () => {
        window.open("https://www.linkedin.com/in/humberto-mueses-851572258/","_blank")
    },
    github: () => {
        window.open("https://github.com/07Humberto-Mueses","_blank")
    },
    download: () => {
        const link = document.createElement("a");
        link.href = "/Hoja_de_vida.pdf";
        link.download = "CV_Humberto_Mueses.pdf";
        link.click();
    }
}