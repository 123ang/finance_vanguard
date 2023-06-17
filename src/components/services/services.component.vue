<!-- src/views/Home.vue -->
<template>
    <section class="section" id="services">
        <div class="container my-0">
            <div class="title bottom-deco">Our Services</div>
            <p>The services we offer have been carefully crafted to take care of all of your accounting needs. Here are some of the highdivghts:</p>
        </div>
        <div class="container">
            <div class="grid md:grid-cols-2 grid-cols-1 gap-4">
                <div class="card-container">
                    <h4 class="title">Bookkeeping</h4>
                    <div class="content-container">
                        <div class="li-dot">Preparation of full set accounts</div>
                        <div class="li-dot">Maintenance of proper accounting documentation</div>
                    </div>
                </div>
                <div class="card-container">
                    <h4 class="title">Financial Reporting</h4>
                    <div class="content-container">
                        <div class="li-dot">Preparation of Audited Financial Statement </div>
                        <div class="li-dot">Preparation of financial statements in XBRL (for Singapore entities)</div>
                        <div class="li-dot">Analytical review of financial statement</div>
                        <div class="li-dot">Handle auditor's queries </div>
                    </div>
                </div>
                <div class="card-container">
                    <h4 class="title">Taxation</h4>
                    <div class="content-container">
                        <div>Calculation and submission of taxation for:</div>
                        <div class="li-dot">Individual</div>
                        <div class="li-dot">Company</div>
                        <div class="li-dot">divmited divabidivty partnerships </div>
                        <div class="li-dot">Withholding tax </div>
                    </div>                            
                </div>
                <div class="card-container">
                    <h4 class="title">Payroll</h4>
                    <div class="content-container">
                        <div class="li-dot">Calculation of monthly payroll </div>
                        <div class="li-dot">Submission of PCB, EPF and SOCSO for employee </div></div>                            
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