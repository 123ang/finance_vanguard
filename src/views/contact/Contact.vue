<template>
    <div class="page">
      <div>
        <p>Phone</p>
        <p>011-1331 4692</p>
      </div>
      <div>
        <p>Whatsapp</p>
        <p></p>
      </div>
      <div>
        <p>Telegram</p>
        <p></p>
      </div>
      <div>
        <p>Email</p>
        <p>financevanguard1111@gmail.com</p>
      </div>
      <div>
        <form method="POST" action="https://formsubmit.co/financevanguard1111@gmail.com">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" v-model="form.name" required />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" v-model="form.email" required />
          </div>
          <div class="form-group">
            <label for="contactNumber">Contact Number</label>
            <input type="tel" id="contactNumber" name="contactNumber" v-model="form.contactNumber" required />
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" name="message" v-model="form.message" required></textarea>
          </div>
          <!-- This input field is needed for formsubmit.co to work. -->
          <input type="hidden" name="_next" value="https://financevanguard.net/" />
          <button type="submit">Send</button>
      </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PageName',
  }
  </script>
  
  <style scoped>
  /* CSS styles for this page */
  </style>