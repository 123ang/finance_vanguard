<!-- src/views/Home.vue -->
<template>
    <section class="section" id="services">
        <div class="container my-0">
            <div class="title bottom-deco">Our Services</div>
            <p>The services we offer have been carefully crafted to take care of all of your accounting needs. Here are some of the highlights:</p>
        </div>
        <div class="container">
            <div class="grid md:grid-cols-2 grid-cols-1 gap-4">
                <div class="card-container">
                    <h4 class="title">Bookkeeping</h4>
                    <p>We can handle all your bookkeeping needs, leaving you free to focus on growing your business.</p>
                </div>
                <div class="card-container">
                    <h4 class="title">Tax Preparation</h4>
                    <p>We can take care of all your tax preparation needs, ensuring your filings are accurate and timely.</p>
                </div>
                <div class="card-container">
                    <h4 class="title">Payroll Management</h4>
                    <p>We offer payroll management services, freeing up your time to focus on what you do best.</p>                    
                </div>
                <div class="card-container">
                    <h4 class="title">Financial Statements</h4>
                    <p>We can help you create financial statements that give you a clear picture of your company's financial health.</p>
                </div>
            </div>
        </div>
    </section>
</template>
  
<script>
export default {
    name: 'Services',
}
</script>
  
<style lang="scss" scoped>
    @import '@/assets/css/main.scss';
    @import './services.styles.scss';
</style>