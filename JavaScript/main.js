// Animate Smooth Scroll for 'My Work'
$('#view-gallery').on('click', function() {
  const images = $('#images').position().top;

  $('html, body').animate(
    {
      scrollTop: images
    },
    900
  );
});
// Smooth scroll animation for 'contact info'
$('#view-contact').on('click', function() {
  const contactInfo = $('footer').position().top;

  $('html, body').animate(
    {
      scrollTop: contactInfo
    },
    900
  );
});
