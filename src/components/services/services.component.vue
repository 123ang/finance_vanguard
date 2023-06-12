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
                    <p>
                        <ul>
                            <li>Preparation of full set accounts</li>
                            <li>Maintenance of proper accounting documentation</li>
                        </ul>
                    </p>
                </div>
                <div class="card-container">
                    <h4 class="title">Financial Reporting</h4>
                    <p>
                        <ul>
                            <li>Preparation of Audited Financial Statement </li>
                            <li>Preparation of financial statements in XBRL (for Singapore entities)</li>
                            <li>Analytical review of financial statement</li>
                            <li>Handle auditor's queries </li>
                        </ul>
                    </p>
                </div>
                <div class="card-container">
                    <h4 class="title">Taxation</h4>
                    <p>
                        <ul>
                            <li>Calculation and submission of taxation for:
                                <ul>
                                <li>Individual</li>
                                <li>Company</li>
                                <li>Limited liability partnerships </li>
                                <li>Withholding tax </li>
                                </ul>
                            </li>
                        
                        </ul>
                    </p>                    
                </div>
                <div class="card-container">
                    <h4 class="title">Payroll</h4>
                    <p>
                        <ul>
                            <li>Calculation of monthly payroll </li>
                            <li>Submission of PCB, EPF and SOCSO for employee </li>
                        </ul>
                    </p>
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