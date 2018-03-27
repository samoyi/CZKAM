<template>
    <article-page :html="contentHTML"></article-page>
</template>

<script>

import articlePage from '../../../../public/components/article.vue';
export default {
    components:{
        articlePage,
    },
    data () {
        return {
            contentHTML: `
                <h2>简介  <span>INTRODUCE</span></h2>
                <p>西安崔振宽美术馆是由当代中国画重要代表人物、当代长安画派领军人物崔振宽先生资助，陕西水墨长安文化艺术有限公司投资兴建的一座集展览陈列、收藏保护、学术研究、艺术交流、公共教育、文化休闲为一体的大型民营美术馆。</p>
                <p>美术馆座落于西安灞桥生态湿地公园，占地38亩，建筑面积19000平方米，设崔振宽作品陈列厅、综合展厅、艺术品典藏库、多功能报告厅、贵宾接待厅等展览应用空间。配套有艺术酒店、餐厅、艺术品商店、咖啡厅、停车场等设施，可举办不同类型的大、中型艺术展览和文化活动。</p>
                <p>美术馆地处古都西安——以周秦汉唐辉煌历史著称的文化名城，亦是古代亚欧陆上丝绸之路的起点与中心。崔振宽美术馆将与同时建立的水墨长安艺术博物馆一道，展示、收藏和研究高品质、代表性的历史遗存、文人书画、民间工艺等中国传统艺术。</p>
                <p>美术馆以三项学术工作为重点： 一、展示、收藏和研究崔振宽先生艺术作品及文献资料； 二、展示、收藏和研究中国当代水墨艺术创作趋势和优秀艺术家作品； 三、展示、收藏和研究中国西部地区当代艺术成果和历史脉络。</p>
                <p>崔振宽美术馆将聘请学者、资深批评家、策展人组成学术委员会，组建展览团队，从策展、布展到传播、接待，从培养艺术受众、推介原创艺术到创新展览模式，追求高品质、专业化的工作方式。美术馆将与国内学术性美术馆结成展览联盟，共享资源，为西安市民带来更多更好的海内外重要艺术展览。同时因地制宜，开展公共艺术教育、当代艺术人才和知识培训、艺术衍生品开发等文化产业项目，为美术馆长期有效运转提供保障。</p>
                <p class="articalImgP"><img src="http://funca.oss-cn-hangzhou.aliyuncs.com/CuiZhenkuanArtMuseum/about_us/art_gallery/introduce/1.jpg" class="articalImg" alt="美术馆大楼" /></p>
                <p>Xi'an Cui Zhenkuan art museum is an important representative of Chinese by contemporary painting and contemporary painting of Changan leader Mr. Cui Zhenkuan funded, Shaanxi ink Changan culture art limited company to invest in the construction of a set of protection, exhibition display, academic research, art exchange, public education, culture and leisure as one of the large-scale private art museum.</p>
                <p>The art museum is located in Xi'an Baqiao Ecological Wetland Park, covers an area of 38 mu, building area of 19000 square meters, with the works of Cui Zhenkuan exhibition hall, exhibition hall, comprehensive art repositories, multi-purpose hall, VIP reception hall and Exhibition space. Supporting Relais Residenza DArte, restaurant, art store, coffee shop, parking lot and other facilities, can hold different types of large and medium-sized art exhibitions and cultural activities.</p>
                <p>The museum is located in the ancient capital of Xi'an - a famous cultural city known for the history of Zhou Qinhan, also the starting point and center of the ancient Silk Road in Asia and Europe. The Cui Zhenkuan art museum will display, collect and study Chinese traditional art, such as high quality, representative historical relics, literati calligraphy and painting, folk arts, and so on, together with the ink painting Museum of Changan.</p>
                <p>Museum of art in three academic work as the focus: first, display, collection and research of Cui Zhenkuan's art and literature; two, display, collection and research Chinese contemporary ink art trends and outstanding works; three, display, collection and research Chinese in western area of contemporary art history and achievements.</p>
                <p>Xi'an Cui Zhenkuan museum will employ Liu Xiaochun, Jia Fangzhou, Peng De, Jian Pi Dao, Wang Lin, Yin Shuangxi, Cheng Zheng, He Dan, Karen Smith and other famous scholars of the academic committee of the first, to effectively promote academic work, and provide the information platform and working conditions for the related academic research. Will hire a senior critic, curator of the formation of the exhibition team, the reception from the curatorial exhibit, to spread, from the culture, art, art to the original audience to promote innovation exhibition mode, the pursuit of high-quality, professional work.</p>
                <p>Art Museum will form an exhibition alliance with domestic academic galleries, sharing resources to bring more and better exhibitions of important art at home and abroad for the people of Xi'an. At the same time, local conditions, to carry out public art education, contemporary art talent and knowledge training, art derivatives development and other cultural industry projects for the museum to provide effective long-term security operation.</p>
            `,
        }
    },
}
</script>

<style lang="scss">
@import "../../../../public/scss/basic.scss";
@import "../../../../public/scss/common.scss";

</style>
