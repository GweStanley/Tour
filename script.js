document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('currentYear').textContent = new Date().getFullYear();
  });
  
  document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const businessName = document.getElementById('businessName').value;
    const telephone = document.getElementById('telephone').value;
    const email = document.getElementById('email').value;
    const location = document.getElementById('location').value;
    const description = document.getElementById('description').value;
    const whatsapp = document.getElementById('whatsapp').value;
    const images = document.getElementById('images').files;
  
    if (images.length > 0) {
      const imageURLs = [];
      for (let i = 0; i < Math.min(images.length, 5); i++) {
        imageURLs.push(URL.createObjectURL(images[i]));
      }
  
      const cardHTML = `
        <div class="col-md-4">
          <div class="card" onclick="toggleCard(this)">
            <img src="${imageURLs[0]}" class="card-img-top" alt="${businessName}">
            <div class="card-body">
              <div class="card-summary">
                <h5 class="card-title">${businessName}</h5>
                <p class="card-text">${location}</p>
                <button class="btn btn-primary">More Info</button>
              </div>
              <div class="card-content">
                <h5>${businessName}</h5>
                <p><strong>Phone:</strong> ${telephone}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Location:</strong> ${location}</p>
                <p><strong>Description:</strong> ${description}</p>
                <p><strong>WhatsApp:</strong> <a href="https://wa.me/${whatsapp}" target="_blank">Chat on WhatsApp</a></p>
                <div>
                  ${imageURLs
                    .map(
                      (img) =>
                        `<img src="${img}" alt="${businessName}" class="img-fluid mb-2" style="max-width: 100px;">`
                    )
                    .join('')}
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
  
      document.getElementById('businessCards').innerHTML += cardHTML;
  
      document.getElementById('registerForm').reset();
      $('#registerModal').modal('hide');
    }
  });
  
  function toggleCard(card) {
    card.classList.toggle('expanded');
  }
  document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const images = document.getElementById('images').files;
    const imageGallery = document.querySelector('.image-gallery');
    imageGallery.innerHTML = ''; 

    for (let i = 0; i < images.length; i++) {
      const imgElement = document.createElement('img');
      imgElement.src = URL.createObjectURL(images[i]);
      imgElement.alt = `Uploaded Image ${i + 1}`;
      imageGallery.appendChild(imgElement);
    }
  
    document.getElementById('registerForm').reset();
    $('#registerModal').modal('hide');
  });
  