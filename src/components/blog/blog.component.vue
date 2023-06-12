<template>
    <section class="section" id="blog" hidden>        
        <div class="container">
            <div class="title-container text-center mt-0">
                <div class="title bottom-deco white">Blog</div>
                <p>Stay up-to-date with the latest accounting trends and best practices.</p>
            </div>
            <div class="grid gap-4 md:grid-cols-2">       

                <div class="blog-list">
                    <div class="title">Recent Posts</div>
                    <a href="#" class="li-dot">5 Tips for Managing Your Business Finances</a>
                    <a href="#" class="li-dot">The Top Tax Deductions for Small Business Owners</a>
                    <a href="#" class="li-dot">Understanding Financial Statements: A Beginner's Guide</a>
                </div>         

                <div>
                    <p>Get access to exclusive content and interact with other accounting professionals by joining our community.</p>
                    <div class="button-container">
                        <a href="#">Join Our Community</a>
                    </div>
                </div>     

            </div>
        </div>
    </section>
</template>
  
<script>
export default {
    name: 'Blog',
}
</script>
  
<style lang="scss" scoped>
    @import '@/assets/css/main.scss';
    @import './blog.styles.scss';
</style>