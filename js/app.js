// Nexa Tech — interações com JavaScript (ES6)
document.addEventListener('DOMContentLoaded', () => {
  const key = 'nexa-tech-cart';
  let cart = JSON.parse(localStorage.getItem(key) || '[]');
  const count = document.getElementById('cart-count');
  const list = document.getElementById('cart-items');
  const empty = document.getElementById('cart-empty');
  const toastEl = document.getElementById('nexa-toast');
  const toast = toastEl && window.bootstrap ? new bootstrap.Toast(toastEl, {delay: 2200}) : null;
  const money = v => new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(v);
  function renderCart(){
    if(count) count.textContent = cart.reduce((n,p)=>n+p.qty,0);
    if(list){ list.innerHTML=''; cart.forEach((p,i)=>{ const li=document.createElement('li'); li.className='list-group-item d-flex justify-content-between align-items-center gap-2'; li.innerHTML=`<span>${p.name}<small class="d-block text-muted">${money(p.price)} · qtd. ${p.qty}</small></span><button class="btn btn-sm btn-outline-danger" data-remove="${i}" aria-label="Remover ${p.name}">Remover</button>`; list.appendChild(li); }); }
    if(empty) empty.hidden = cart.length>0;
    localStorage.setItem(key,JSON.stringify(cart));
  }
  function notify(message){const msg=document.getElementById('toast-message');if(msg)msg.textContent=message;if(toast)toast.show();}
  document.querySelectorAll('[data-add-cart]').forEach(btn=>btn.addEventListener('click',()=>{
    const card=btn.closest('.card') || btn.closest('.feature') || document;
    const name=card.querySelector('h1,h3')?.textContent.trim() || 'Produto Nexa Tech';
    const priceText=card.querySelector('.price')?.textContent || '0';
    const price=Number(priceText.replace(/[^0-9,]/g,'').replace('.','').replace(',','.')) || 0;
    const found=cart.find(p=>p.name===name); if(found)found.qty++; else cart.push({name,price,qty:1});
    renderCart(); notify(`${name} foi adicionado ao carrinho.`);
  }));
  if(list) list.addEventListener('click',e=>{const b=e.target.closest('[data-remove]');if(b){cart.splice(Number(b.dataset.remove),1);renderCart();}});
  document.getElementById('clear-cart')?.addEventListener('click',()=>{cart=[];renderCart();notify('Carrinho esvaziado.');});
  renderCart();
  // Busca instantânea dos cartões no catálogo.
  const search=document.getElementById('product-search');
  search?.addEventListener('input',()=>{const q=search.value.toLocaleLowerCase('pt-BR');document.querySelectorAll('.product-card').forEach(card=>{card.hidden=!card.textContent.toLocaleLowerCase('pt-BR').includes(q);});});
  // Validação acessível do formulário demonstrativo.
  const form=document.getElementById('contact-form');
  form?.addEventListener('submit',e=>{e.preventDefault();if(!form.checkValidity()){form.classList.add('was-validated');document.getElementById('form-feedback').textContent='Confira os campos destacados e tente novamente.';return;}document.getElementById('form-feedback').textContent='Mensagem validada! Este protótipo não envia dados para um servidor.';form.reset();form.classList.remove('was-validated');});
});
