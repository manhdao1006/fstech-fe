<template>
    <div class="block-footer">
        <div class="container">
            <div class="row">
                <div class="col-xl-10 col-md-10 col-8 content-footer">
                    <div class="mt-3">Copyright © 2025 All rights reserved by Manh Dao</div>
                </div>
                <div
                    class="col-xl-2 col-md-2 col-4 align-content-center row justify-content-evenly"
                >
                    <div class="col-3 d-flex justify-content-center pb-1">
                        <a href="#">
                            <img
                                src="../../../assets/zalo.png"
                                alt="zalo"
                                width="30px"
                                height="30px"
                            />
                        </a>
                    </div>
                    <div class="col-3 d-flex justify-content-center pb-1">
                        <a href="#">
                            <img
                                src="../../../assets/fb.png"
                                alt="facebook"
                                width="30px"
                                height="30px"
                            />
                        </a>
                    </div>
                    <div class="col-3 d-flex justify-content-center pb-1">
                        <a href="#">
                            <img
                                src="../../../assets/yt.png"
                                alt="youtube"
                                width="30px"
                                height="25px"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'Footer'
    })
</script>

<style>
    .block-footer {
        background: #04002e;
    }
    .content-footer {
        font-family: 'Montserrat';
        font-size: 15.38px;
        font-weight: 400;
        line-height: 25px;
        color: #ffffff;
        margin: 20px 0px 45px;
    }

    @media (width: 540px) {
        .content-footer {
            font-size: 8px;
        }
    }

    @media (max-width: 480px) {
        .content-footer {
            font-size: 8px;
        }
    }
</style>
