// CMS Analytica — comportamento do formulário de diagnóstico
// Sem backend: o formulário monta a mensagem e abre o WhatsApp já preenchido,
// replicando o fluxo validado no lançamento em stories ("preencha o formulário,
// se houver fit te chamo no WhatsApp").

const WHATSAPP_NUMERO = "5541999045684";

function initDiagnosticForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = form.querySelector("[name=nome]")?.value.trim() || "";
    const segmento = form.querySelector("[name=segmento]")?.value.trim() || "";
    const cidade = form.querySelector("[name=cidade]")?.value.trim() || "";
    const desafio = form.querySelector("[name=desafio]")?.value.trim() || "";
    const origem = form.dataset.origem || "site-institucional";

    const linhas = [
      "Olá! Vim pelo site da CMS Analytica e quero o diagnóstico gratuito.",
      nome && `Nome: ${nome}`,
      segmento && `Negócio/segmento: ${segmento}`,
      cidade && `Cidade: ${cidade}`,
      desafio && `Principal desafio: ${desafio}`,
      `Origem: ${origem}`,
    ].filter(Boolean);

    const mensagem = encodeURIComponent(linhas.join("\n"));
    const url = `https://wa.me/${WHATSAPP_NUMERO}?text=${mensagem}`;

    window.open(url, "_blank");
  });
}

function initMobileMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav.main-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", function () {
    const isOpen = nav.classList.toggle("open");
    toggle.classList.toggle("is-active", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("open");
      toggle.classList.remove("is-active");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  initDiagnosticForm("diagnostic-form");
  initMobileMenu();
});
