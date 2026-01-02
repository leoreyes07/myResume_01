document.addEventListener('DOMContentLoaded', (event) => {

    setTimeout(() => {
        document.querySelector('#load__iframe--map').innerHTML = `
            <iframe class="contact__iframe" frameborder="0" margingheight="0" marginwidth="0" width="600" height="200"
            style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249677.59029092002!2d-86.42327040163525!3d12.097610425697155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f71560dd907880b%3A0x6c5ef4a2144f4c6a!2sManagua!5e0!3m2!1sen!2sni!4v1767367069192!5m2!1sen!2sni"></iframe>
            `;
    }, 500)

})