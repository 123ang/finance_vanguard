<template>
    <section class="section" id="pricing">
        <div class="container title-container mt-0">
            <div class="title bottom-deco">Pricing and Packages</div>
            <p>Our prices are tailored to meet your specific needs and budget. Here are some of our most popular packages:</p>
        </div>
        <div class="container">
            <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">

                <div class="card-container">
                    <div class="title">Basic package</div>
                    <div class="content">
                        <div class="li-dot">Bookkeeping</div>
                        <div class="li-dot">Financial statements</div>
                        <div class="li-dot">Tax preparation</div>
                    </div>
                    <div class="price-container">
                        <div class="price">$500/month</div>
                    </div>
                </div>

                <div class="card-container">
                    <div class="title">Silver package</div>
                    <div class="content">
                        <div class="li-dot">All basic services</div>
                        <div class="li-dot">Payroll management</div>
                        <div class="li-dot">Quarterly financial reviews</div>
                    </div>
                    <div class="price-container">
                        <div class="price">$800/month</div>
                    </div>
                </div>

                <div class="card-container">
                    <div class="title">Gold package</div>
                    <div class="content">
                        <div class="li-dot">All silver services</div>
                        <div class="li-dot">Customized financial reporting</div>
                        <div class="li-dot">Estate and gift planning</div>
                    </div>
                    <div class="price-container">
                        <div class="price">$1200/month</div>
                    </div>
                </div>

                <div class="card-container">
                    <div class="title">Platinum package</div>
                    <div class="content">
                        <div class="li-dot">All gold services</div>
                        <div class="li-dot">Strategic tax planning</div>
                        <div class="li-dot">Retirement planning</div>
                    </div>
                    <div class="price-container">
                        <div class="price">$2000/month</div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>
  
<script>
export default {
    name: 'Pricing',
}
</script>
  
<style lang="scss" scoped>
    @import '@/assets/css/main.scss';
    @import './pricing.styles.scss';
</style>