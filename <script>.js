<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Carrito de Compras</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

<div class="container mt-5">
  <div class="row">
    <!-- Ejemplo de tarjeta de producto -->
    <div class="col-md-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Producto 1</h5>
          <button class="btn btn-primary" data-add="1">Agregar al carrito</button>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Producto 2</h5>
          <button class="btn btn-primary" data-add="2">Agregar al carrito</button>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Modal del carrito -->
<div class="modal fade" id="cartModal" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Carrito</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        <ul id="cartItems" class="list-group"></ul>
      </div>
    </div>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
<script>
document.addEventListener('DOMContentLoaded', () => {
  const cart = [];
  const buttons = document.querySelectorAll('[data-add]');
  const cartItems = document.getElementById('cartItems');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const productName = btn.closest('.card').querySelector('.card-title').textContent;
      cart.push(productName);

      // Limpiar y actualizar lista
      cartItems.innerHTML = '';
      cart.forEach(item => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = item;
        cartItems.appendChild(li);
      });

      // Abrir modal
      const cartModalEl = document.getElementById('cartModal');
      let cartModal = bootstrap.Modal.getInstance(cartModalEl);
      if (!cartModal) cartModal = new bootstrap.Modal(cartModalEl);
      cartModal.show();
    });
  });
});
</script>

</body>
</html>
