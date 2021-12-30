<template>
  <section class="main-section" role="banner">
    <Slide :v-for="(product, i) in t" :key="i" :product="product"/>
  </section>
</template>
    <figure class="hero-image hero-image--hidden">
      <img
        src="https://blogdesuperheroes.es/wp-content/plugins/BdSGallery/BdSGaleria/19050.jpg"
        alt=""
        class="hero-image__cover"
      />
      <figcaption class="cover-image">
        <div class="cover-image-duration">
          <span class="cover-image-duration__label">Duration: </span>
          <span class="cover-image-duration__value">51m</span>
        </div>
        <div class="cover-information">
          <!-- Calification -->
          <span class="cover-information__label material-icons">star</span>
          <span class="cover-information__value">7.5</span>
          <!-- Number of Seasons -->
          <span class="cover-information__label">Season</span>
          <span class="cover-information__value">10</span>
          <!-- Number of Episodes -->
          <span class="cover-information__label">Episode</span>
          <span class="cover-information__value">22</span>
        </div>
        <div class="cover-content">
          <h1 class="cover-content__title">The walking dead</h1>
          <p class="cover-content__resume">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam odio
            culpa pariatur, dolorem in unde corporis nam est ab rem ducimus
            commodi modi laudantium eaque eveniet magni corrupti laboriosam at!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam odio
            culpa pariatur, dolorem in unde corporis nam est ab rem ducimus
            commodi modi laudantium eaque eveniet magni corrupti laboriosam at!
          </p>
          <div class="cover-actions">
            <Button
              buttonText="WATCH"
              customClass="btn-secondary btn-secondary--shadow"
              iconText="play_arrow"
            />
            <span></span>
            <Button
              buttonText="ADD LIST"
              customClass="btn-primary"
              iconText="add"
            />
          </div>
        </div>
      </figcaption>
    </figure>

<script lang="ts">
import { defineComponent, onBeforeMount, onBeforeUnmount, ref } from "vue";
import { IMDbService } from "../../services/IMDbService";
import { OptsTitle, IMDBTitle } from "../../shared/interfaces/IMDbTitle";
import Slide from "./components/Slide.vue";

export default defineComponent({
  name: "Banner",
  components: {
    Slide,
  },
  setup() {
    // const products = ref<IMDBTitle[]>();
    const products = t;
    const _IMDbService = IMDbService;
    const swithSlider = setInterval(() => {
      const slides = document.querySelectorAll("figure.slide-container");
      slides.forEach( slide => {
        slide.matches('.slide-container--hidden')
          ? slide.classList.remove("slide-container--hidden")
          : slide.classList.add("slide-container--hidden");
      });
    }, 5000);

    onBeforeMount( async () => {
      // const idTvs: string[] = await _IMDbService.MostPopularIdTVs( 5 );
      const opt: OptsTitle[] = ['Images', 'Posters', 'Ratings', 'Trailer'];
      const data: IMDBTitle[] = [];

      // idTvs.forEach( async idTv => {
      //   const titleData: IMDBTitle = await _IMDbService.Title( idTv, opt );
      //   data.push( titleData );
      //   console.log(data)
      // });

      // products.value = t as any; 
    });

    onBeforeUnmount( () => {
      clearInterval(swithSlider);
    });

    return { products , t }
  },
});
var t = [
  {
    "id": "tt10574558",
    "title": "Midnight Mass",
    "originalTitle": "",
    "fullTitle": "Midnight Mass (2021– )",
    "type": "TVSeries",
    "year": "2021",
    "image": "https://imdb-api.com/images/original/MV5BODFiYjI3Y2UtY2M5My00ODk3LTgwN2MtOTg5MDFhYjBmMmQ3XkEyXkFqcGdeQXVyNjY0MzEwMTY@._V1_Ratio0.7046_AL_.jpg",
    "releaseDate": "",
    "runtimeMins": "40",
    "runtimeStr": "40min",
    "plot": "An isolated island community experiences miraculous events - and frightening omens - after the arrival of a charismatic, mysterious young priest.",
    "plotLocal": "",
    "plotLocalIsRtl": false,
    "awards": "",
    "directors": "",
    "directorList": [],
    "writers": "",
    "writerList": [],
    "stars": "Rahul Abburi, Crystal Balint, Matt Biedel",
    "starList": [
      {
        "id": "nm7817511",
        "name": "Rahul Abburi"
      },
      {
        "id": "nm1925584",
        "name": "Crystal Balint"
      },
      {
        "id": "nm2560926",
        "name": "Matt Biedel"
      }
    ],
    "actorList": [
      {
        "id": "nm7817511",
        "image": "https://imdb-api.com/images/original/MV5BMTg3Mzg4ODQ0OF5BMl5BanBnXkFtZTgwNjA3MTY3OTE@._V1_Ratio1.0000_AL_.jpg",
        "name": "Rahul Abburi",
        "asCharacter": ""
      },
      {
        "id": "nm1925584",
        "image": "https://imdb-api.com/images/original/MV5BNDIxNWQ5MzMtYzJhNy00ODc3LWJiYTktNmMxMmRmZjA5NTQzXkEyXkFqcGdeQXVyNjE3MDc4MQ@@._V1_Ratio1.0000_AL_.jpg",
        "name": "Crystal Balint",
        "asCharacter": ""
      },
      {
        "id": "nm2560926",
        "image": "https://imdb-api.com/images/original/MV5BNjg1YjhkMDAtN2I4NS00YjU3LWE1ZDYtMDVlMzg5YzdmY2JmXkEyXkFqcGdeQXVyMTIzODQ5Mzc@._V1_Ratio1.0000_AL_.jpg",
        "name": "Matt Biedel",
        "asCharacter": ""
      },
      {
        "id": "nm11677561",
        "image": "https://imdb-api.com/images/original/nopicture.jpg",
        "name": "Annarah Cymone",
        "asCharacter": ""
      },
      {
        "id": "nm3012273",
        "image": "https://imdb-api.com/images/original/MV5BZTE1MGZhNTMtZTJlMC00NzFjLTgyOWItNzVhYmJmNjNmYmEyXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_Ratio1.0000_AL_.jpg",
        "name": "Alex Essoe",
        "asCharacter": ""
      },
      {
        "id": "nm1472917",
        "image": "https://imdb-api.com/images/original/MV5BMTg1MDc0NjQyMV5BMl5BanBnXkFtZTgwNTkyMTIzMDE@._V1_Ratio1.0000_AL_.jpg",
        "name": "Zach Gilford",
        "asCharacter": ""
      },
      {
        "id": "nm0001272",
        "image": "https://imdb-api.com/images/original/MV5BMjAxMzQyNTMwOF5BMl5BanBnXkFtZTgwNzQyNzI2MjE@._V1_Ratio1.0000_AL_.jpg",
        "name": "Annabeth Gish",
        "asCharacter": ""
      },
      {
        "id": "nm3418510",
        "image": "https://imdb-api.com/images/original/MV5BMTgzODA0NDA0Nl5BMl5BanBnXkFtZTgwODcyNDkyMjE@._V1_Ratio1.0000_AL_.jpg",
        "name": "Rahul Kohli",
        "asCharacter": ""
      },
      {
        "id": "nm0005138",
        "image": "https://imdb-api.com/images/original/MV5BMTUyODM4ODMxN15BMl5BanBnXkFtZTcwMzAxMjQ1NA@@._V1_Ratio1.0000_AL_.jpg",
        "name": "Kristin Lehman",
        "asCharacter": ""
      },
      {
        "id": "nm0512934",
        "image": "https://imdb-api.com/images/original/MV5BMjA1MzgzMDExN15BMl5BanBnXkFtZTgwOTg2MjAwMDE@._V1_Ratio1.0000_AL_.jpg",
        "name": "Hamish Linklater",
        "asCharacter": ""
      },
      {
        "id": "nm0519486",
        "image": "https://imdb-api.com/images/original/MV5BYTQ4Y2MyMjUtNTljNy00MjYwLWJlNTktOGVhYzA2NDI4NTkyXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_Ratio1.0000_AL_.jpg",
        "name": "Robert Longstreet",
        "asCharacter": ""
      },
      {
        "id": "nm6217433",
        "image": "https://imdb-api.com/images/original/nopicture.jpg",
        "name": "Louis Oliver",
        "asCharacter": "Ookeras Ooker"
      },
      {
        "id": "nm9723807",
        "image": "https://imdb-api.com/images/original/MV5BN2IwOWE2NjgtZDZhZS00NDU5LWEyM2YtODk5ZThiNjlmYzVjXkEyXkFqcGdeQXVyODY3NjkyMTk@._V1_Ratio1.2571_AL_.jpg",
        "name": "Igby Rigney",
        "asCharacter": ""
      },
      {
        "id": "nm2318089",
        "image": "https://imdb-api.com/images/original/MV5BMDE4Mjg1NTktNjM4OS00MjNkLWJhMGMtMTg0MTBjNWM2YzczXkEyXkFqcGdeQXVyNTQ1NTQyNjk@._V1_Ratio1.0000_AL_.jpg",
        "name": "Kate Siegel",
        "asCharacter": ""
      },
      {
        "id": "nm1418096",
        "image": "https://imdb-api.com/images/original/MV5BMmU5NDk4NzItZWJjZS00NzBhLTg5NmMtYWJiM2VkM2ExMjMxXkEyXkFqcGdeQXVyMjA3NTg0NzM@._V1_Ratio1.0000_AL_.jpg",
        "name": "Samantha Sloyan",
        "asCharacter": ""
      },
      {
        "id": "nm0001794",
        "image": "https://imdb-api.com/images/original/MV5BMTQ5NjY0NjI5NV5BMl5BanBnXkFtZTYwMDYzMTYz._V1_Ratio1.0000_AL_.jpg",
        "name": "Henry Thomas",
        "asCharacter": ""
      },
      {
        "id": "nm0873998",
        "image": "https://imdb-api.com/images/original/MV5BYzA1NDk4NDktMWYwYy00MjQzLTg0ZDAtMWJhY2UyNmI5YTEwXkEyXkFqcGdeQXVyNjA4NjQwNw@@._V1_Ratio1.0000_AL_.jpg",
        "name": "Michael Trucco",
        "asCharacter": ""
      },
      {
        "id": "nm10119482",
        "image": "https://imdb-api.com/images/original/MV5BZTRmMjYwNzYtZDI1OS00ZDgxLTgzMjgtZTljZmUyMTgyYTNlXkEyXkFqcGdeQXVyMTAzMzU4MDU4._V1_Ratio1.0000_AL_.jpg",
        "name": "Kapila Rego",
        "asCharacter": "Lawyeras Lawyer"
      }
    ],
    "fullCast": null,
    "genres": "Drama, Horror, Mystery",
    "genreList": [
      {
        "key": "Drama",
        "value": "Drama"
      },
      {
        "key": "Horror",
        "value": "Horror"
      },
      {
        "key": "Mystery",
        "value": "Mystery"
      }
    ],
    "companies": "Intrepid Pictures, Netflix Studios",
    "companyList": [
      {
        "id": "co0059753",
        "name": "Intrepid Pictures"
      },
      {
        "id": "co0650527",
        "name": "Netflix Studios"
      }
    ],
    "countries": "Canada, USA",
    "countryList": [
      {
        "key": "Canada",
        "value": "Canada"
      },
      {
        "key": "USA",
        "value": "USA"
      }
    ],
    "languages": "English",
    "languageList": [
      {
        "key": "English",
        "value": "English"
      }
    ],
    "contentRating": "TV-MA",
    "imDbRating": "",
    "imDbRatingVotes": "",
    "metacriticRating": "74",
    "ratings": {
      "imDbId": "tt10574558",
      "title": "Midnight Mass",
      "fullTitle": "Midnight Mass (2021– )",
      "type": "TVSeries",
      "year": "2021",
      "imDb": "",
      "metacritic": "74",
      "theMovieDb": "7.7",
      "rottenTomatoes": "89",
      "tV_com": "",
      "filmAffinity": "6.6",
      "errorMessage": ""
    },
    "wikipedia": null,
    "posters": {
      "imDbId": "tt10574558",
      "title": "Midnight Mass",
      "fullTitle": "Midnight Mass (2021)",
      "type": "TVSeries",
      "year": "2021",
      "posters": [
        {
          "id": "iYoMZYVD775MtBYJfv6OGY1FsnL.jpg",
          "link": "https://imdb-api.com/posters/original/iYoMZYVD775MtBYJfv6OGY1FsnL.jpg",
          "aspectRatio": 0.6666666666666666,
          "language": "en",
          "width": 2000,
          "height": 3000
        },
        {
          "id": "3eVSQJdiBin6A7F7nsg62eJFf0Y.jpg",
          "link": "https://imdb-api.com/posters/original/3eVSQJdiBin6A7F7nsg62eJFf0Y.jpg",
          "aspectRatio": 0.666966696669667,
          "language": "en",
          "width": 1482,
          "height": 2222
        },
        {
          "id": "9VNTyqlojsj9gLJhrPcIFWzaoZv.jpg",
          "link": "https://imdb-api.com/posters/original/9VNTyqlojsj9gLJhrPcIFWzaoZv.jpg",
          "aspectRatio": 0.6666666666666666,
          "language": "en",
          "width": 2000,
          "height": 3000
        },
        {
          "id": "qKT9wm6JnjJ0w8jJHoBfe5yriRx.jpg",
          "link": "https://imdb-api.com/posters/original/qKT9wm6JnjJ0w8jJHoBfe5yriRx.jpg",
          "aspectRatio": 0.6666666666666666,
          "language": "en",
          "width": 2000,
          "height": 3000
        },
        {
          "id": "erFjwWa2Dt1OlrZpRYs0DUPDMzT.jpg",
          "link": "https://imdb-api.com/posters/original/erFjwWa2Dt1OlrZpRYs0DUPDMzT.jpg",
          "aspectRatio": 0.6747404844290658,
          "language": "en",
          "width": 780,
          "height": 1156
        },
        {
          "id": "rfvcsPzqetrvFSugbehkYtEcPfV.jpg",
          "link": "https://imdb-api.com/posters/original/rfvcsPzqetrvFSugbehkYtEcPfV.jpg",
          "aspectRatio": 0.6753333333333333,
          "language": "en",
          "width": 1013,
          "height": 1500
        },
        {
          "id": "xEk3FlxuugVFV8dM9UlUOSbMHzT.jpg",
          "link": "https://imdb-api.com/posters/original/xEk3FlxuugVFV8dM9UlUOSbMHzT.jpg",
          "aspectRatio": 0.6666666666666666,
          "language": "en",
          "width": 2000,
          "height": 3000
        },
        {
          "id": "3Q168guFQKGRwELDpK9BsCAoCzt.jpg",
          "link": "https://imdb-api.com/posters/original/3Q168guFQKGRwELDpK9BsCAoCzt.jpg",
          "aspectRatio": 0.666966696669667,
          "language": "en",
          "width": 1482,
          "height": 2222
        },
        {
          "id": "sqs0eVqUArkzAFNRgqFTwRSEqyH.jpg",
          "link": "https://imdb-api.com/posters/original/sqs0eVqUArkzAFNRgqFTwRSEqyH.jpg",
          "aspectRatio": 0.6666666666666666,
          "language": "en",
          "width": 2000,
          "height": 3000
        },
        {
          "id": "dTosK1UmI0Ji059IkRDdBVdnufz.jpg",
          "link": "https://imdb-api.com/posters/original/dTosK1UmI0Ji059IkRDdBVdnufz.jpg",
          "aspectRatio": 0.7038327526132404,
          "language": "en",
          "width": 606,
          "height": 861
        },
        {
          "id": "5fWLhX1lCgxgwBoGDDhhVoOSBLJ.jpg",
          "link": "https://imdb-api.com/posters/original/5fWLhX1lCgxgwBoGDDhhVoOSBLJ.jpg",
          "aspectRatio": 0.6672038678485093,
          "language": "en",
          "width": 828,
          "height": 1241
        }
      ],
      "backdrops": [
        {
          "id": "4XbQb5YoWK9oMrlQdKwtZ1ccpC8.jpg",
          "link": "https://imdb-api.com/posters/original/4XbQb5YoWK9oMrlQdKwtZ1ccpC8.jpg",
          "aspectRatio": 1.7777777777777777,
          "language": "en",
          "width": 1920,
          "height": 1080
        },
        {
          "id": "61KEbuIc66BdlHyUcROcN480cgr.jpg",
          "link": "https://imdb-api.com/posters/original/61KEbuIc66BdlHyUcROcN480cgr.jpg",
          "aspectRatio": 1.7777777777777777,
          "language": "en",
          "width": 3600,
          "height": 2025
        },
        {
          "id": "xuxRwiDsKhq6NNJSfBpTvug087h.jpg",
          "link": "https://imdb-api.com/posters/original/xuxRwiDsKhq6NNJSfBpTvug087h.jpg",
          "aspectRatio": 1.7777777777777777,
          "language": "en",
          "width": 1280,
          "height": 720
        },
        {
          "id": "1xaiEc9FTiXLvH3nuJS65XSESd0.jpg",
          "link": "https://imdb-api.com/posters/original/1xaiEc9FTiXLvH3nuJS65XSESd0.jpg",
          "aspectRatio": 1.7777777777777777,
          "language": "en",
          "width": 2048,
          "height": 1152
        }
      ],
      "errorMessage": ""
    },
    "images": {
      "imDbId": "tt10574558",
      "title": "Midnight Mass",
      "fullTitle": "Midnight Mass (2021)",
      "type": "TVSeries",
      "year": "2021",
      "items": [
        {
          "title": "Hamish Linklater and Zach Gilford in Midnight Mass (2021)",
          "image": "https://imdb-api.com/images/original/MV5BMWJlNTE4NzYtN2JhNy00ZjZmLThhZTItNWE1NDZjMzM3YjYxXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_Ratio1.5000_AL_.jpg"
        },
        {
          "title": "Kate Siegel in Midnight Mass (2021)",
          "image": "https://imdb-api.com/images/original/MV5BYjAxYTI4MTQtZTQzNy00ZWFiLTk1NTYtMGQxOTVjN2FjZGNmXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_Ratio1.5000_AL_.jpg"
        },
        {
          "title": "Samantha Sloyan in Midnight Mass (2021)",
          "image": "https://imdb-api.com/images/original/MV5BOTZiYzdkOTUtMWI4ZS00OWEyLWI0NjUtN2IxYzI2NzFmYzAwXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_Ratio1.5000_AL_.jpg"
        },
        {
          "title": "Annabeth Gish, Hamish Linklater, and Samantha Sloyan in Midnight Mass (2021)",
          "image": "https://imdb-api.com/images/original/MV5BNDJkM2NkZmEtNDg4Zi00YTVmLTg5ZDYtMDFkN2ZhN2I5N2UwXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_Ratio1.5000_AL_.jpg"
        },
        {
          "title": "Henry Thomas and Kristin Lehman in Midnight Mass (2021)",
          "image": "https://imdb-api.com/images/original/MV5BZDZlN2FjMTMtZTdmMC00MjZjLTg1NmUtOTUzZDdhZWZlN2JjXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_Ratio1.5000_AL_.jpg"
        },
        {
          "title": "Hamish Linklater in Midnight Mass (2021)",
          "image": "https://imdb-api.com/images/original/MV5BYTZhMDhmYWUtYzYxZC00YmI3LTg3M2YtMDExZjc4MWYxM2NkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_Ratio2.0200_AL_.jpg"
        },
        {
          "title": "Louis Oliver, Rahul Abburi, and Igby Rigney in Midnight Mass (2021)",
          "image": "https://imdb-api.com/images/original/MV5BOTJlNmY3MzgtNmUxMS00YjIyLTkxNGQtYzM0YjgwNjZmYTRmXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Annabeth Gish, Gloricaa Kortez, Kate Siegel, and K. Kortez in Midnight Mass (2021)",
          "image": "https://imdb-api.com/images/original/MV5BN2JjMWI1OTMtODZmZi00MTI2LTk0YWUtYjgzOTlkZDljNzA4XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Zach Gilford in Midnight Mass (2021)",
          "image": "https://imdb-api.com/images/original/MV5BNTkwYzU5NjYtMTQyZC00NDA3LTg5YTgtOThhOTkzODhhOGY5XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_Ratio1.5000_AL_.jpg"
        },
        {
          "title": "Robert Longstreet and Rahul Kohli in Midnight Mass (2021)",
          "image": "https://imdb-api.com/images/original/MV5BYzE3Zjg1NmYtMjMwMS00N2IxLTkzMzYtYWIwMGQwNjUxZDg4XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Midnight Mass (2021)",
          "image": "https://imdb-api.com/images/original/MV5BNWVmZWQ5ZmItZjc2OC00MTFhLWI4OTEtNWY3MDg0OWY3YTJjXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_Ratio1.0000_AL_.jpg"
        },
        {
          "title": "Quinton Boisclair in Midnight Mass (2021)",
          "image": "https://imdb-api.com/images/original/MV5BMDU1YjZmYmUtNzgwZi00NjliLWE3MGItZjJiMjU1YmRlZjk3XkEyXkFqcGdeQXVyMTI5NzY4MjI3._V1_Ratio2.0600_AL_.jpg"
        },
        {
          "title": "Kate Siegel in Midnight Mass (2021)",
          "image": "https://imdb-api.com/images/original/MV5BM2QzZDBiMzAtYzZiYy00MWFiLWEzNTgtMWE1N2Y3ZmRkZDdjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Samantha Sloyan and Matt Biedel in Midnight Mass (2021)",
          "image": "https://imdb-api.com/images/original/MV5BMGY0ZGIyYWMtZTIwMC00NzcwLWJkN2YtZjc5OTQyYjc4NmM5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Annabeth Gish, Kate Siegel, and Alex Essoe in Midnight Mass (2021)",
          "image": "https://imdb-api.com/images/original/MV5BMGU1ZGU5MDAtM2MyMS00OTQ5LTg2OGQtMTRkNzgzOTlhZjE0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Midnight Mass (2021)",
          "image": "https://imdb-api.com/images/original/MV5BN2NlMjBkM2YtNWNjNS00NWJmLWI3MWMtODYxZTE3OWI3ZWQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Hamish Linklater in Midnight Mass (2021)",
          "image": "https://imdb-api.com/images/original/MV5BN2UxMzk4MGItYjNkNi00NzI0LWEwZmEtY2NjNWZhMWQ2OGMwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Michael Trucco and Rahul Kohli in Midnight Mass (2021)",
          "image": "https://imdb-api.com/images/original/MV5BODc1MTBjNGMtM2RhNi00MTJmLTliMmQtMDg4OTdmZGVjZTQ0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Midnight Mass (2021)",
          "image": "https://imdb-api.com/images/original/MV5BZTk3ZjIzYWYtYTVjMC00ZDRkLThiZjYtMTZmZjlmMzc1MzYyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Midnight Mass (2021)",
          "image": "https://imdb-api.com/images/original/MV5BZWVmODBiZTItZGNhOC00NmRmLTkxM2QtMmI5NGUwMjFhYmY2XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_Ratio2.0200_AL_.jpg"
        },
        {
          "title": "Midnight Mass (2021)",
          "image": "https://imdb-api.com/images/original/MV5BMmViNGEzOTAtM2FiNS00NmMxLWI2NWUtNDQ5MTdhZTI1NWRkXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Kate Siegel in Midnight Mass (2021)",
          "image": "https://imdb-api.com/images/original/MV5BZWQzYmZjZTItMzlhYS00NDcxLWJiYzgtMTAzMDM1N2JhZWUxXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Hamish Linklater and Zach Gilford in Midnight Mass (2021)",
          "image": "https://imdb-api.com/images/original/MV5BNDRlM2ZlNWUtMTY5My00MGQ1LWFmZmItYTFlNjBjOGJjNWFlXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_Ratio1.5000_AL_.jpg"
        },
        {
          "title": "Zach Gilford in Midnight Mass (2021)",
          "image": "https://imdb-api.com/images/original/MV5BNzFmMGYwMGItNzBiMi00N2M2LTg5MGMtNDYyN2QwZGVjNWYzXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_Ratio1.5000_AL_.jpg"
        },
        {
          "title": "Midnight Mass (2021)",
          "image": "https://imdb-api.com/images/original/MV5BYzBjOTRiYmUtZDBjNi00ZmVhLThlZmUtMWMwNmM5NmZmMzgxXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Hamish Linklater in Midnight Mass (2021)",
          "image": "https://imdb-api.com/images/original/MV5BMWQyMTE1MmEtZmQzNS00YTZiLThlNDQtZjA2MjA3YjAyZTZiXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_Ratio2.0200_AL_.jpg"
        },
        {
          "title": "Rahul Kohli in Midnight Mass (2021)",
          "image": "https://imdb-api.com/images/original/MV5BN2MwYWE4YTctOTgyMi00MDI5LWFjMDktMDdiOWEyMTFmMDFjXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_Ratio1.5000_AL_.jpg"
        },
        {
          "title": "Kate Siegel in Midnight Mass (2021)",
          "image": "https://imdb-api.com/images/original/MV5BYTZmNmFhNGItYTMxNy00M2I1LWJiNzMtYWY3Njc4ODU4Y2U4XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Hamish Linklater, Samantha Sloyan, Zach Gilford, Kate Siegel, and Rahul Kohli in Midnight Mass (2021)",
          "image": "https://imdb-api.com/images/original/MV5BZjBlYzljZTQtNTZiMy00NWUzLWI3ZDEtZDdjZDY2NGM4NTQxXkEyXkFqcGdeQXVyMTI0MzA4NTgw._V1_Ratio1.0000_AL_.jpg"
        },
        {
          "title": "Midnight Mass (2021)",
          "image": "https://imdb-api.com/images/original/MV5BYjA1MzRiNTUtODExZS00ZGQ5LWIzODQtOTljMTM5OTQ4Y2IyXkEyXkFqcGdeQXVyNTg5NjcwNjY@._V1_Ratio1.0000_AL_.jpg"
        },
        {
          "title": "Kate Siegel in Midnight Mass (2021)",
          "image": "https://imdb-api.com/images/original/MV5BMDMzOTlkNjktZmEwYy00MzFkLTlmOTYtYTJhODg0MDU3YmI0XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_Ratio2.4600_AL_.jpg"
        },
        {
          "title": "Hamish Linklater, Samantha Sloyan, Zach Gilford, Kate Siegel, and Rahul Kohli in Midnight Mass (2021)",
          "image": "https://imdb-api.com/images/original/MV5BYWFkNzE3YWEtZWQwZC00MDQ0LWI2NDgtNTZjM2Y3YWM2MzMzXkEyXkFqcGdeQXVyMTU2NTcyMg@@._V1_Ratio1.0000_AL_.jpg"
        },
        {
          "title": "Midnight Mass (2021)",
          "image": "https://imdb-api.com/images/original/MV5BODFiYjI3Y2UtY2M5My00ODk3LTgwN2MtOTg5MDFhYjBmMmQ3XkEyXkFqcGdeQXVyNjY0MzEwMTY@._V1_Ratio1.0000_AL_.jpg"
        }
      ],
      "errorMessage": ""
    },
    "trailer": {
      "imDbId": "tt10574558",
      "title": "Midnight Mass",
      "fullTitle": "Midnight Mass (2021– )",
      "type": "TVSeries",
      "year": "2021",
      "videoId": "vi2214445337",
      "videoTitle": "Stream &amp; Scream: The Best Haunted Houses",
      "videoDescription": "On this IMDbrief, stream and scream along with us as we break down our Watchlist of the best haunted houses on screen.",
      "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BZjYwNjZmYTYtMjU3NC00ZTRmLWI0ZTYtNTFkNDM1ODMyMzdmXkEyXkFqcGdeQWFsZWxvZw@@._V1_.jpg",
      "uploadDate": null,
      "link": "https://www.imdb.com/video/vi2214445337",
      "linkEmbed": "https://www.imdb.com/video/imdb/vi2214445337/imdb/embed",
      "errorMessage": ""
    },
    "boxOffice": {
      "budget": "",
      "openingWeekendUSA": "",
      "grossUSA": "",
      "cumulativeWorldwideGross": ""
    },
    "tagline": "",
    "keywords": "psychotronic series,midnight,community,frightening,arrival",
    "keywordList": [
      "psychotronic series",
      "midnight",
      "community",
      "frightening",
      "arrival"
    ],
    "similars": [
      {
        "id": "tt0395558",
        "title": "Ghosts of Hamilton Street",
        "fullTitle": "Ghosts of Hamilton Street",
        "year": "",
        "image": "https://imdb-api.com/images/original/MV5BMTcxMjYwNjU5OV5BMl5BanBnXkFtZTcwMDQyMTUyMQ@@._V1_Ratio0.6763_AL_.jpg",
        "plot": "",
        "directors": "",
        "stars": "",
        "genres": "",
        "imDbRating": "5.7"
      },
      {
        "id": "tt0305793",
        "title": "Makebelieve",
        "fullTitle": "Makebelieve",
        "year": "",
        "image": "https://imdb-api.com/images/original/MV5BMDM2N2MzY2YtODVmMi00Yzc5LThlZDUtNTRjOWIyMmMxMWNkXkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_Ratio0.7536_AL_.jpg",
        "plot": "",
        "directors": "",
        "stars": "",
        "genres": "",
        "imDbRating": "5.5"
      },
      {
        "id": "tt1610996",
        "title": "Absentia",
        "fullTitle": "Absentia",
        "year": "",
        "image": "https://imdb-api.com/images/original/MV5BMjE0MDUyODg1MF5BMl5BanBnXkFtZTcwOTgyMzA2Nw@@._V1_Ratio0.6763_AL_.jpg",
        "plot": "",
        "directors": "",
        "stars": "",
        "genres": "",
        "imDbRating": "5.8"
      },
      {
        "id": "tt0166186",
        "title": "Still Life",
        "fullTitle": "Still Life",
        "year": "",
        "image": "https://imdb-api.com/images/original/MV5BMTc4MTc4MDk3M15BMl5BanBnXkFtZTYwMDMzODc5._V1_Ratio0.6763_AL_.jpg",
        "plot": "",
        "directors": "",
        "stars": "",
        "genres": "",
        "imDbRating": "5.6"
      }
    ],
    "tvSeriesInfo": {
      "yearEnd": "",
      "creators": "Mike Flanagan",
      "creatorList": [
        {
          "id": "nm1093039",
          "name": "Mike Flanagan"
        }
      ],
      "seasons": [
        "1"
      ]
    },
    "tvEpisodeInfo": null,
    "errorMessage": ""
  },
  {
    "id": "tt10919420",
    "title": "Squid Game",
    "originalTitle": "",
    "fullTitle": "Squid Game (2021)",
    "type": "TVSeries",
    "year": "2021",
    "image": "https://imdb-api.com/images/original/MV5BYWE3MDVkN2EtNjQ5MS00ZDQ4LTliNzYtMjc2YWMzMDEwMTA3XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_Ratio0.6762_AL_.jpg",
    "releaseDate": "2021-09-17",
    "runtimeMins": null,
    "runtimeStr": null,
    "plot": "A story of people who fail at life for various reasons, but suddenly receive a mysterious invitation to participate in a survival game to win more than 38 million US dollars. The game takes place at an unknown location and the participants are locked up until there is a final winner. The story will incorporate popular children's games from the 1970s and 1980s of Korea, such as squid game, literal translation of its Korean name, which is a type of tag where offense and defense use a squid-shaped board drawn in the dirt.",
    "plotLocal": "",
    "plotLocalIsRtl": false,
    "awards": "",
    "directors": "",
    "directorList": [],
    "writers": "",
    "writerList": [],
    "stars": "Lee Jung-jae, Park Hae-soo, Greg Chun",
    "starList": [
      {
        "id": "nm0497631",
        "name": "Lee Jung-jae"
      },
      {
        "id": "nm7676537",
        "name": "Park Hae-soo"
      },
      {
        "id": "nm1601080",
        "name": "Greg Chun"
      }
    ],
    "actorList": [
      {
        "id": "nm0497631",
        "image": "https://imdb-api.com/images/original/MV5BMTAxNjA1MTIxODJeQTJeQWpwZ15BbWU3MDQzOTc1NDk@._V1_Ratio1.0000_AL_.jpg",
        "name": "Lee Jung-jae",
        "asCharacter": "Seong Gi-hunas Seong Gi-hun…"
      },
      {
        "id": "nm7676537",
        "image": "https://imdb-api.com/images/original/MV5BNzMyMDgwNzktOTcyYy00MGU5LWI0Y2EtOThmNTNlM2M5MjFhXkEyXkFqcGdeQXVyMTkyNzcwMjg@._V1_Ratio2.3286_AL_.jpg",
        "name": "Park Hae-soo",
        "asCharacter": "Cho Sang-wooas Cho Sang-woo…"
      },
      {
        "id": "nm1601080",
        "image": "https://imdb-api.com/images/original/MV5BY2NiYzNhYjUtNTgxYi00OTU2LWFjZDAtYmZlNTljZmQ4NTMxXkEyXkFqcGdeQXVyMzUyMDg4Nw@@._V1_Ratio1.0000_AL_.jpg",
        "name": "Greg Chun",
        "asCharacter": "Gi-Hunas Gi-Hun"
      },
      {
        "id": "nm8002676",
        "image": "https://imdb-api.com/images/original/nopicture.jpg",
        "name": "Stephen Fu",
        "asCharacter": "Sang-Wooas Sang-Woo"
      },
      {
        "id": "nm1059827",
        "image": "https://imdb-api.com/images/original/MV5BNDVhZTZlMmMtMjRlZS00MjE3LWI4YjAtZDI2ZWVjNDAwYjRhXkEyXkFqcGdeQXVyMDU4NjkxOA@@._V1_Ratio1.0000_AL_.jpg",
        "name": "Tom Choi",
        "asCharacter": "Frontmanas Frontman"
      },
      {
        "id": "nm4467500",
        "image": "https://imdb-api.com/images/original/MV5BYTUzOWYxNjItNzFlMi00Yjg0LWE3YTktZGJiYzRhZDE1ZjJmXkEyXkFqcGdeQXVyNTY4NjU3ODI@._V1_Ratio1.0000_AL_.jpg",
        "name": "Rama Vallury",
        "asCharacter": "Alias Ali…"
      },
      {
        "id": "nm9665672",
        "image": "https://imdb-api.com/images/original/MV5BZmM2ZGY2Y2MtNjViMC00YWVhLTk3OTUtZWYxMzFlYmZiOThjXkEyXkFqcGdeQXVyNDY5MjMyNTg@._V1_Ratio1.0000_AL_.jpg",
        "name": "Wi Ha-Joon",
        "asCharacter": "Hwang Jun-hoas Hwang Jun-ho"
      },
      {
        "id": "nm9475707",
        "image": "https://imdb-api.com/images/original/MV5BZmQ5NDk1ZDAtNGRlOC00ODc5LWFlYzQtOTc1MjI4ZGM2MzYzXkEyXkFqcGdeQXVyMzQ0NTk5NzU@._V1_Ratio1.0000_AL_.jpg",
        "name": "Jung Hoyeon",
        "asCharacter": "Kang Sae-byeokas Kang Sae-byeok"
      },
      {
        "id": "nm1478697",
        "image": "https://imdb-api.com/images/original/MV5BOWYzOTQxNDUtMDViZi00OGU1LWE4NWEtYTFiMDMxZWQwM2VhXkEyXkFqcGdeQXVyMTcwMTEwMTI@._V1_Ratio1.0000_AL_.jpg",
        "name": "Paul Nakauchi",
        "asCharacter": "Deok-Suas Deok-Su…"
      },
      {
        "id": "nm0454079",
        "image": "https://imdb-api.com/images/original/nopicture.jpg",
        "name": "Hideo Kimura",
        "asCharacter": "Il-Namas Il-Nam"
      },
      {
        "id": "nm4559922",
        "image": "https://imdb-api.com/images/original/MV5BMTczOTE3NTAyMF5BMl5BanBnXkFtZTcwMjU3OTI0OA@@._V1_Ratio1.0000_AL_.jpg",
        "name": "Stephanie Komure",
        "asCharacter": "Mi-Nyeoas Mi-Nyeo…"
      },
      {
        "id": "nm8384321",
        "image": "https://imdb-api.com/images/original/MV5BYmYxOWY2MjgtMjNhMy00Y2I5LWIxODMtYTA3NzdhMzE0ZTBhXkEyXkFqcGdeQXVyMTA5NTMzNzUw._V1_Ratio1.1571_AL_.jpg",
        "name": "Vivian Lu",
        "asCharacter": "Sae-Byeokas Sae-Byeok…"
      },
      {
        "id": "nm1230598",
        "image": "https://imdb-api.com/images/original/MV5BNWEwMjJmNWItNjQxZC00NjhkLThiOGEtMDRmZjE4ZTc2YWY2L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNDAxOTExNTM@._V1_Ratio1.7857_AL_.jpg",
        "name": "Oh Yeong-su",
        "asCharacter": "Oh Il-namas Oh Il-nam"
      },
      {
        "id": "nm6757627",
        "image": "https://imdb-api.com/images/original/MV5BM2JhNGY5YmYtNGVhYy00NDJhLTgwNWQtZDAzMzE1YTY4NTNiXkEyXkFqcGdeQXVyNTI5NjIyMw@@._V1_Ratio1.0000_AL_.jpg",
        "name": "Heo Sung-tae",
        "asCharacter": "Jang Deok-suas Jang Deok-su"
      },
      {
        "id": "nm12294932",
        "image": "https://imdb-api.com/images/original/MV5BNjg1NjBhMDgtZjlhYy00MzEzLTgzN2YtNDljMDc1NzdhYWVjXkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_Ratio1.0000_AL_.jpg",
        "name": "Anupam Tripathi",
        "asCharacter": "Ali Abdulas Ali Abdul"
      },
      {
        "id": "nm4460678",
        "image": "https://imdb-api.com/images/original/MV5BZmMxNWQwNzgtOTgwOC00YjRhLTljYjktZTJiZTkxYTE1ZGZiXkEyXkFqcGdeQXVyMjY5MjUzMTU@._V1_Ratio1.0000_AL_.jpg",
        "name": "Donald Chang",
        "asCharacter": "Jun-Hoas Jun-Ho"
      },
      {
        "id": "nm2494806",
        "image": "https://imdb-api.com/images/original/nopicture.jpg",
        "name": "Kim Joo-Ryung",
        "asCharacter": "Han Mi-nyeoas Han Mi-nyeo"
      },
      {
        "id": "nm0496932",
        "image": "https://imdb-api.com/images/original/MV5BMmFiNTE1ZTctZDA2Yy00M2EyLThiODAtZTFiZTU1NDI1NGI5XkEyXkFqcGdeQXVyNTI5NjIyMw@@._V1_Ratio1.0000_AL_.jpg",
        "name": "Lee Byung-hun",
        "asCharacter": "Front manas Front man"
      }
    ],
    "fullCast": null,
    "genres": "Action, Drama, Mystery",
    "genreList": [
      {
        "key": "Action",
        "value": "Action"
      },
      {
        "key": "Drama",
        "value": "Drama"
      },
      {
        "key": "Mystery",
        "value": "Mystery"
      }
    ],
    "companies": "Siren Pictures",
    "companyList": [
      {
        "id": "co0717024",
        "name": "Siren Pictures"
      }
    ],
    "countries": "South Korea",
    "countryList": [
      {
        "key": "South Korea",
        "value": "South Korea"
      }
    ],
    "languages": "Korean, English, Urdu",
    "languageList": [
      {
        "key": "Korean",
        "value": "Korean"
      },
      {
        "key": "English",
        "value": "English"
      },
      {
        "key": "Urdu",
        "value": "Urdu"
      }
    ],
    "contentRating": "TV-MA",
    "imDbRating": "8.2",
    "imDbRatingVotes": "203118",
    "metacriticRating": "69",
    "ratings": {
      "imDbId": "tt10919420",
      "title": "Squid Game",
      "fullTitle": "Squid Game (2021)",
      "type": "TVSeries",
      "year": "2021",
      "imDb": "8.2",
      "metacritic": "69",
      "theMovieDb": "7.9",
      "rottenTomatoes": "92",
      "tV_com": "",
      "filmAffinity": "7.2",
      "errorMessage": ""
    },
    "wikipedia": null,
    "posters": {
      "imDbId": "tt10919420",
      "title": "Squid Game",
      "fullTitle": "Squid Game (2021)",
      "type": "TVSeries",
      "year": "2021",
      "posters": [
        {
          "id": "dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
          "link": "https://imdb-api.com/posters/original/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
          "aspectRatio": 0.666966696669667,
          "language": "en",
          "width": 1482,
          "height": 2222
        },
        {
          "id": "uu4TgyyW259aOZHN0Ew4TEfjnUG.jpg",
          "link": "https://imdb-api.com/posters/original/uu4TgyyW259aOZHN0Ew4TEfjnUG.jpg",
          "aspectRatio": 0.6748046875,
          "language": "en",
          "width": 1382,
          "height": 2048
        },
        {
          "id": "eo6Umqd9q5dIK1UFfwwxblkbTWp.jpg",
          "link": "https://imdb-api.com/posters/original/eo6Umqd9q5dIK1UFfwwxblkbTWp.jpg",
          "aspectRatio": 0.6788025889967637,
          "language": "en",
          "width": 839,
          "height": 1236
        },
        {
          "id": "pt1OiQ7Oy5bTg4y8NLjivV9Rjcu.jpg",
          "link": "https://imdb-api.com/posters/original/pt1OiQ7Oy5bTg4y8NLjivV9Rjcu.jpg",
          "aspectRatio": 0.6741573033707865,
          "language": "en",
          "width": 1500,
          "height": 2225
        },
        {
          "id": "22c1utiZNogqi6tRp6hBSlzi5tL.jpg",
          "link": "https://imdb-api.com/posters/original/22c1utiZNogqi6tRp6hBSlzi5tL.jpg",
          "aspectRatio": 0.6748046875,
          "language": "en",
          "width": 1382,
          "height": 2048
        },
        {
          "id": "uSqnBM7TLpYFK77EfYZQZjmJDXX.jpg",
          "link": "https://imdb-api.com/posters/original/uSqnBM7TLpYFK77EfYZQZjmJDXX.jpg",
          "aspectRatio": 0.68,
          "language": "en",
          "width": 680,
          "height": 1000
        },
        {
          "id": "j05hGmB6fvAUuQXQ6raiVJJQnLp.jpg",
          "link": "https://imdb-api.com/posters/original/j05hGmB6fvAUuQXQ6raiVJJQnLp.jpg",
          "aspectRatio": 0.6748046875,
          "language": "en",
          "width": 1382,
          "height": 2048
        },
        {
          "id": "uyAh5nLdOGSxRRT2RHEmCaNFnJo.jpg",
          "link": "https://imdb-api.com/posters/original/uyAh5nLdOGSxRRT2RHEmCaNFnJo.jpg",
          "aspectRatio": 0.6666666666666666,
          "language": "en",
          "width": 500,
          "height": 750
        },
        {
          "id": "gD1ap1UAHuVwYLYSp3umc4tgMQM.jpg",
          "link": "https://imdb-api.com/posters/original/gD1ap1UAHuVwYLYSp3umc4tgMQM.jpg",
          "aspectRatio": 0.6750675067506751,
          "language": "en",
          "width": 1500,
          "height": 2222
        },
        {
          "id": "rtOq6ARpwQqU8Q8VNyJ5VfKevTq.jpg",
          "link": "https://imdb-api.com/posters/original/rtOq6ARpwQqU8Q8VNyJ5VfKevTq.jpg",
          "aspectRatio": 0.6750675067506751,
          "language": "en",
          "width": 1500,
          "height": 2222
        },
        {
          "id": "5cnjw7M6LRrBofBGTAeSrYFPTNU.jpg",
          "link": "https://imdb-api.com/posters/original/5cnjw7M6LRrBofBGTAeSrYFPTNU.jpg",
          "aspectRatio": 0.6750675067506751,
          "language": "en",
          "width": 1500,
          "height": 2222
        },
        {
          "id": "nMdzoubu2KgVNsCXqQ0zhQcMX95.jpg",
          "link": "https://imdb-api.com/posters/original/nMdzoubu2KgVNsCXqQ0zhQcMX95.jpg",
          "aspectRatio": 0.666966696669667,
          "language": "en",
          "width": 1482,
          "height": 2222
        },
        {
          "id": "fUtAUWBMGqitXyVCX13QHLYga8h.jpg",
          "link": "https://imdb-api.com/posters/original/fUtAUWBMGqitXyVCX13QHLYga8h.jpg",
          "aspectRatio": 0.666966696669667,
          "language": "en",
          "width": 1482,
          "height": 2222
        },
        {
          "id": "sVQMn6IisDFslFUiaQCHx7FWCSM.jpg",
          "link": "https://imdb-api.com/posters/original/sVQMn6IisDFslFUiaQCHx7FWCSM.jpg",
          "aspectRatio": 0.666966696669667,
          "language": "en",
          "width": 1482,
          "height": 2222
        },
        {
          "id": "ZbWYElHqde0RNddWXiL3PlfKE9.jpg",
          "link": "https://imdb-api.com/posters/original/ZbWYElHqde0RNddWXiL3PlfKE9.jpg",
          "aspectRatio": 0.666966696669667,
          "language": "en",
          "width": 1482,
          "height": 2222
        },
        {
          "id": "4CYXVmNnvYxZw4kE78hybZuEvgY.jpg",
          "link": "https://imdb-api.com/posters/original/4CYXVmNnvYxZw4kE78hybZuEvgY.jpg",
          "aspectRatio": 0.68,
          "language": "en",
          "width": 680,
          "height": 1000
        },
        {
          "id": "nr0HqRJJzTqxIXKOooRaunqJd2U.jpg",
          "link": "https://imdb-api.com/posters/original/nr0HqRJJzTqxIXKOooRaunqJd2U.jpg",
          "aspectRatio": 0.6748046875,
          "language": "en",
          "width": 1382,
          "height": 2048
        }
      ],
      "backdrops": [
        {
          "id": "qw3J9cNeLioOLoR68WX7z79aCdK.jpg",
          "link": "https://imdb-api.com/posters/original/qw3J9cNeLioOLoR68WX7z79aCdK.jpg",
          "aspectRatio": 1.7777777777777777,
          "language": "en",
          "width": 1920,
          "height": 1080
        },
        {
          "id": "oaGvjB0DvdhXhOAuADfHb261ZHa.jpg",
          "link": "https://imdb-api.com/posters/original/oaGvjB0DvdhXhOAuADfHb261ZHa.jpg",
          "aspectRatio": 1.7777777777777777,
          "language": "en",
          "width": 2048,
          "height": 1152
        },
        {
          "id": "4y6kEEfdrNIUnWnmELkoc3EmgG7.jpg",
          "link": "https://imdb-api.com/posters/original/4y6kEEfdrNIUnWnmELkoc3EmgG7.jpg",
          "aspectRatio": 1.7777777777777777,
          "language": "en",
          "width": 1280,
          "height": 720
        },
        {
          "id": "3xF78MnaTAoX3hkygglbCUEywU.jpg",
          "link": "https://imdb-api.com/posters/original/3xF78MnaTAoX3hkygglbCUEywU.jpg",
          "aspectRatio": 1.7777777777777777,
          "language": "en",
          "width": 2048,
          "height": 1152
        },
        {
          "id": "3BoloIxQZ0hL6VOvGvLchPOqxwt.jpg",
          "link": "https://imdb-api.com/posters/original/3BoloIxQZ0hL6VOvGvLchPOqxwt.jpg",
          "aspectRatio": 1.7777777777777777,
          "language": "en",
          "width": 3840,
          "height": 2160
        },
        {
          "id": "epYrokeotsx7VmqSi5Y5fcCRkMa.jpg",
          "link": "https://imdb-api.com/posters/original/epYrokeotsx7VmqSi5Y5fcCRkMa.jpg",
          "aspectRatio": 1.7772511848341233,
          "language": "en",
          "width": 1500,
          "height": 844
        },
        {
          "id": "rcUOn4fBodXt9maRllLe68B1G1Q.jpg",
          "link": "https://imdb-api.com/posters/original/rcUOn4fBodXt9maRllLe68B1G1Q.jpg",
          "aspectRatio": 1.7791666666666666,
          "language": "en",
          "width": 1708,
          "height": 960
        },
        {
          "id": "wifqUHZe5jmI9tcjK7Ish6V1TDR.jpg",
          "link": "https://imdb-api.com/posters/original/wifqUHZe5jmI9tcjK7Ish6V1TDR.jpg",
          "aspectRatio": 1.7772511848341233,
          "language": "en",
          "width": 1500,
          "height": 844
        },
        {
          "id": "468Qcj9iAGXFF3jYaV2NejU1BXp.jpg",
          "link": "https://imdb-api.com/posters/original/468Qcj9iAGXFF3jYaV2NejU1BXp.jpg",
          "aspectRatio": 1.7772511848341233,
          "language": "en",
          "width": 1500,
          "height": 844
        },
        {
          "id": "dwxoljV3lmZBzJgnPhMDE7gAwrC.jpg",
          "link": "https://imdb-api.com/posters/original/dwxoljV3lmZBzJgnPhMDE7gAwrC.jpg",
          "aspectRatio": 1.7777777777777777,
          "language": "en",
          "width": 2560,
          "height": 1440
        }
      ],
      "errorMessage": ""
    },
    "images": {
      "imDbId": "tt10919420",
      "title": "Squid Game",
      "fullTitle": "Squid Game (2021)",
      "type": "TVSeries",
      "year": "2021",
      "items": [
        {
          "title": "Squid Game (2021)",
          "image": "https://imdb-api.com/images/original/MV5BMTUzZWNkNWEtMGIxYi00ZTEyLTlkOWEtMWRjODQ0YjgwNTRkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_Ratio1.5000_AL_.jpg"
        },
        {
          "title": "Squid Game (2021)",
          "image": "https://imdb-api.com/images/original/MV5BMzdhY2YyZWItYmE2MS00OTA0LWFlMzAtMDY5OWIzOGFkMWVjXkEyXkFqcGdeQXVyNDQ0MTYzMDA@._V1_Ratio1.0000_AL_.jpg"
        },
        {
          "title": "Jung Hoyeon in Squid Game (2021)",
          "image": "https://imdb-api.com/images/original/MV5BMDNiMzg3MWYtNjI0ZS00MTE5LThmZmMtYzE1MmQ0NTFjNTIyXkEyXkFqcGdeQXVyMzQ3Nzk5MTU@._V1_Ratio1.2800_AL_.jpg"
        },
        {
          "title": "Squid Game (2021)",
          "image": "https://imdb-api.com/images/original/MV5BOTU2YWE4ODYtNTRlNy00ZGQyLWEzMDMtNTVlYzY3MTdiZTg5XkEyXkFqcGdeQXVyMzQ3Nzk5MTU@._V1_Ratio1.0000_AL_.jpg"
        },
        {
          "title": "Squid Game (2021)",
          "image": "https://imdb-api.com/images/original/MV5BMTJjZWM1YjgtNTVkYi00ZDAyLTgyMjUtM2JlNmNlNDI3M2QwXkEyXkFqcGdeQXVyMzQ3Nzk5MTU@._V1_Ratio1.5000_AL_.jpg"
        },
        {
          "title": "Heo Sung-tae in Squid Game (2021)",
          "image": "https://imdb-api.com/images/original/MV5BMTc1ZmFkODAtMGQyYi00OWU1LWI5YWUtNzVkMzQ3YjEyNzcyXkEyXkFqcGdeQXVyMzQ3Nzk5MTU@._V1_Ratio1.9600_AL_.jpg"
        },
        {
          "title": "Oh Yeong-su in Squid Game (2021)",
          "image": "https://imdb-api.com/images/original/MV5BMGJiZmQwNGItMDYzMC00NTNkLTljNWItYzBiNGI3NjJlOGIyXkEyXkFqcGdeQXVyMzQ3Nzk5MTU@._V1_Ratio1.0000_AL_.jpg"
        },
        {
          "title": "Wi Ha-Joon in Squid Game (2021)",
          "image": "https://imdb-api.com/images/original/MV5BMmIxZDY2NWItM2U4Yy00OGVhLWJhMjEtM2QyYjZlMmFjNGZlXkEyXkFqcGdeQXVyMzQ3Nzk5MTU@._V1_Ratio2.0200_AL_.jpg"
        },
        {
          "title": "Kim Joo-Ryung in Squid Game (2021)",
          "image": "https://imdb-api.com/images/original/MV5BNjlkODUwOGEtOTU0YS00OWUwLWI5ZTMtMDEwZjQ3ZGNjMjhmXkEyXkFqcGdeQXVyMzQ3Nzk5MTU@._V1_Ratio1.4800_AL_.jpg"
        },
        {
          "title": "Jung Hoyeon in Squid Game (2021)",
          "image": "https://imdb-api.com/images/original/MV5BZjY5NTdmNzUtMmQ0NC00YmU5LTg5YTEtNWU2MjkzZTliNzA2XkEyXkFqcGdeQXVyMzQ3Nzk5MTU@._V1_Ratio1.0000_AL_.jpg"
        },
        {
          "title": "Jung Hoyeon in Squid Game (2021)",
          "image": "https://imdb-api.com/images/original/MV5BYTcyMWU5OTctYzU4OS00Yjk3LTgzZjUtNjAzMWE5MmJmYmNkXkEyXkFqcGdeQXVyMzQ3Nzk5MTU@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Lee Jung-jae in Squid Game (2021)",
          "image": "https://imdb-api.com/images/original/MV5BNTA5OTFlZDAtN2VkNC00ZmYwLWE4MTctNzk3ODYxMWRmYzgzXkEyXkFqcGdeQXVyMTI3Mzg3MzE1._V1_Ratio1.8800_AL_.jpg"
        },
        {
          "title": "Park Hae-soo in Squid Game (2021)",
          "image": "https://imdb-api.com/images/original/MV5BZGE3MDQ3NWYtMDU1MS00YmExLWFkOGMtMDQ3YTliMzVmY2JjXkEyXkFqcGdeQXVyMTI3Mzg3MzE1._V1_Ratio1.9800_AL_.jpg"
        },
        {
          "title": "Squid Game (2021)",
          "image": "https://imdb-api.com/images/original/MV5BMDY3MzJiOTQtZjNlMy00ZGIxLTg0OTMtMzlkYWE3YzRjYTQyXkEyXkFqcGdeQXVyMzQwMDU3NDA@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Park Hae-soo in Squid Game (2021)",
          "image": "https://imdb-api.com/images/original/MV5BNDRmNGM5NGYtNmNhMC00MGE1LWEwNGItMGNlYTQxNGJlNjZhXkEyXkFqcGdeQXVyMzQwMDU3NDA@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Squid Game (2021)",
          "image": "https://imdb-api.com/images/original/MV5BNTVmODVjM2UtM2Y4ZS00YWNmLWJhMjYtNmRkMWEzYjQ2Yjk0XkEyXkFqcGdeQXVyMzQwMDU3NDA@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Park Hae-soo in Squid Game (2021)",
          "image": "https://imdb-api.com/images/original/MV5BOTM1NzdkOTItYTc2YS00ZjE3LWFhZDItYTBmZmU1MDk1MDRkXkEyXkFqcGdeQXVyMzQwMDU3NDA@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Squid Game (2021)",
          "image": "https://imdb-api.com/images/original/MV5BMjk3ZTFlNGEtZWRjYS00NGE2LWI2NzQtZDFhMzFjZTQxN2ViXkEyXkFqcGdeQXVyMzQwMDU3NDA@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Wi Ha-Joon in Squid Game (2021)",
          "image": "https://imdb-api.com/images/original/MV5BNGEwMjkwMzUtMjVmOC00OGRiLWI4MGUtNjczYjA3ZDVlZDA3XkEyXkFqcGdeQXVyMzQwMDU3NDA@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Squid Game (2021)",
          "image": "https://imdb-api.com/images/original/MV5BOWUxMWE2MWYtMjdmOC00MmRkLWJjZTktYmUzNzUzNzdjYWI5XkEyXkFqcGdeQXVyMzQwMDU3NDA@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Squid Game (2021)",
          "image": "https://imdb-api.com/images/original/MV5BMGRjZTY2NWItMDkyZC00ZDUwLTlhOTQtNGI5YmNjY2ViYTE2XkEyXkFqcGdeQXVyMzQwMDU3NDA@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Lee Jung-jae in Squid Game (2021)",
          "image": "https://imdb-api.com/images/original/MV5BMjc2YTZiZjEtNzRhMS00MDE1LWFkNTMtYTcwZWQ1ZDNlNjk2XkEyXkFqcGdeQXVyMzQwMDU3NDA@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Squid Game (2021)",
          "image": "https://imdb-api.com/images/original/MV5BMTI0Zjk4MDktOGFkMC00ZjU2LWJjYmEtYzY2ZDMyOTUyMDE4XkEyXkFqcGdeQXVyMzQwMDU3NDA@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Yang Mal-bok in Squid Game (2021)",
          "image": "https://imdb-api.com/images/original/MV5BZmQ3YjExMTUtOWIyOC00MjdhLThkYmQtZGMxYzEzOGFlMjJiXkEyXkFqcGdeQXVyMzQwMDU3NDA@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Squid Game (2021)",
          "image": "https://imdb-api.com/images/original/MV5BMzgyOWNhZjItZjE1MC00M2I0LTkyNDItYjAwODk4MjcwMGJhXkEyXkFqcGdeQXVyMzQwMDU3NDA@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Wi Ha-Joon in Squid Game (2021)",
          "image": "https://imdb-api.com/images/original/MV5BY2I3NzE0OTgtMmQwYS00MWUyLTk0N2EtOTUwN2U5OWE4MzhkXkEyXkFqcGdeQXVyMzQwMDU3NDA@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Lee Jung-jae, Yang Mal-bok, Hwang Youn-Hee, Kim Joo-Ryung, and Edward Hong in Squid Game (2021)",
          "image": "https://imdb-api.com/images/original/MV5BMzZhYjBjZmYtZDM3Yy00M2E4LTgyNDEtMzJiODRhYzIwODBkXkEyXkFqcGdeQXVyMzQwMDU3NDA@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Squid Game (2021)",
          "image": "https://imdb-api.com/images/original/MV5BNmViOWViM2MtYmExZC00NjJmLWEwNDgtMDcyOGNjOGE3MjNiXkEyXkFqcGdeQXVyMzQwMDU3NDA@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Lee Jung-jae in Squid Game (2021)",
          "image": "https://imdb-api.com/images/original/MV5BZjc5ZmU0NjEtN2FiZi00ODQ4LTg4YTMtOGFmYmNlYTcwYmNiXkEyXkFqcGdeQXVyMzQwMDU3NDA@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Squid Game (2021)",
          "image": "https://imdb-api.com/images/original/MV5BYjRmNWFhMzgtN2M3ZC00YWI3LWE4OGUtMzU4YTM4MWUyYjBmXkEyXkFqcGdeQXVyMzQwMDU3NDA@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Squid Game (2021)",
          "image": "https://imdb-api.com/images/original/MV5BYjQ1MGQ5NjAtZmFjMy00ZGNjLTk1ODMtZjljYTk3NDJhMzM1XkEyXkFqcGdeQXVyMzQwMDU3NDA@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Squid Game (2021)",
          "image": "https://imdb-api.com/images/original/MV5BNGYzNGE0MDAtMjRmNS00MDYxLWFmMjUtZTgzZTk2NGVjOTU4XkEyXkFqcGdeQXVyMzQwMDU3NDA@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Squid Game (2021)",
          "image": "https://imdb-api.com/images/original/MV5BZjIxOGNmZmYtN2M3OS00ZTU1LTg1NjctZGU2OWRmODljZDk5XkEyXkFqcGdeQXVyMzQwMDU3NDA@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Wi Ha-Joon in Squid Game (2021)",
          "image": "https://imdb-api.com/images/original/MV5BMzVhOTFmYjAtYWVjOS00N2ZlLWFlMWMtODNhZTYyNjZiNjg1XkEyXkFqcGdeQXVyMzQwMDU3NDA@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Squid Game (2021)",
          "image": "https://imdb-api.com/images/original/MV5BNjRhM2I3NjYtN2FiZi00YzY2LWI3Y2QtMGQyYjlhMmI5NTk2XkEyXkFqcGdeQXVyMzQwMDU3NDA@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Wi Ha-Joon in Squid Game (2021)",
          "image": "https://imdb-api.com/images/original/MV5BMzk2MWMwMDktYzdlZS00NmYzLTkwNjYtMTlhMzNjMWU1NjM0XkEyXkFqcGdeQXVyMzQwMDU3NDA@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Lee Byung-hun in Squid Game (2021)",
          "image": "https://imdb-api.com/images/original/MV5BZmQ1M2ZmMDUtNGU5Yi00NDkzLTk4MGItMDIxYjQwMmFhOWUwXkEyXkFqcGdeQXVyMzQwMDU3NDA@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Squid Game (2021)",
          "image": "https://imdb-api.com/images/original/MV5BMmRiNTkzNTMtMjUyMi00ODcyLTk2NjktZTZlYzMwYWQ0ZTFkXkEyXkFqcGdeQXVyMzQwMDU3NDA@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Lim Ki-Hong, Kim Si-Hyun, Lee Doo-Seok, Moon Jung-Dae, Moon Byung-Joo, Hwang Youn-Hee, Ko Byung-Taek, Jung Woo-Hyuk, Sang-hee Lee, and Heo Sung-tae in Squid Game (2021)",
          "image": "https://imdb-api.com/images/original/MV5BNjA5Mjc0OWYtZGYyYS00NGJmLTkwMTgtM2MzYTVmYWJhYzU2XkEyXkFqcGdeQXVyMzQwMDU3NDA@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Kim Joo-Ryung in Squid Game (2021)",
          "image": "https://imdb-api.com/images/original/MV5BMDU1YThkYzEtNjAyMS00Y2YzLTk2NTAtNWYyNjhjMWNhNjhhXkEyXkFqcGdeQXVyMzQwMDU3NDA@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Lee Jung-jae and Oh Yeong-su in Squid Game (2021)",
          "image": "https://imdb-api.com/images/original/MV5BODEwMWYzNzUtMjEwOC00MjU2LThjODktZGM5YjgyMTYxMTAxXkEyXkFqcGdeQXVyMzQwMDU3NDA@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Anupam Tripathi in Squid Game (2021)",
          "image": "https://imdb-api.com/images/original/MV5BMmNkMjQwNTQtYTgxYi00NDlhLTk4N2QtOWQyN2NiNjlkY2Y3XkEyXkFqcGdeQXVyMzQwMDU3NDA@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Lee Yoo-mi in Squid Game (2021)",
          "image": "https://imdb-api.com/images/original/MV5BNzFkMGY2MjctZWQyMi00MzVjLThlMjItOTdiNWU5OWRlYzI5XkEyXkFqcGdeQXVyMzQwMDU3NDA@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Lee Jung-jae and Oh Yeong-su in Squid Game (2021)",
          "image": "https://imdb-api.com/images/original/MV5BMTZmN2ZiYjktNzc2MS00NmViLTg1OGUtOWNmOWIzOTJhZGI0XkEyXkFqcGdeQXVyMzQwMDU3NDA@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Lee Yoo-mi and Jung Hoyeon in Squid Game (2021)",
          "image": "https://imdb-api.com/images/original/MV5BYTM4MWMyYzgtMzU2NC00YTYxLWIyZWMtY2ExZDA3OTU1N2MxXkEyXkFqcGdeQXVyMzQwMDU3NDA@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Heo Sung-tae in Squid Game (2021)",
          "image": "https://imdb-api.com/images/original/MV5BOGY5NmJiODUtMmJjNC00YzY1LWJkMmQtZjdlZWVjZjY4MDk2XkEyXkFqcGdeQXVyMzQwMDU3NDA@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Kim Joo-Ryung in Squid Game (2021)",
          "image": "https://imdb-api.com/images/original/MV5BN2RjNmExNjgtOGEzYi00ZjNkLThkMmQtYzZhYzA1OTZjYWNiXkEyXkFqcGdeQXVyMzQwMDU3NDA@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Oh Yeong-su in Squid Game (2021)",
          "image": "https://imdb-api.com/images/original/MV5BMzg5MjJhNGUtNjkwZS00YjVmLWExNTUtZTVhOTJmMzBhNzdiXkEyXkFqcGdeQXVyMzQwMDU3NDA@._V1_Ratio1.7800_AL_.jpg"
        }
      ],
      "errorMessage": ""
    },
    "trailer": {
      "imDbId": "tt10919420",
      "title": "Squid Game",
      "fullTitle": "Squid Game (2021)",
      "type": "TVSeries",
      "year": "2021",
      "videoId": "vi2427699993",
      "videoTitle": "Official Trailer",
      "videoDescription": "Hundreds of cash-strapped players accept a strange invitation to compete in children&apos;s games. Inside, a tempting prize awaits with deadly high stakes.s survival game that has a whopping 40-million-dollar prize at stake.",
      "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BNmFkMDU4YzQtNTMyMC00NDQwLWFhZDAtNmQ1ZmZkYjgwM2JmXkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg",
      "uploadDate": null,
      "link": "https://www.imdb.com/video/vi2427699993",
      "linkEmbed": "https://www.imdb.com/video/imdb/vi2427699993/imdb/embed",
      "errorMessage": ""
    },
    "boxOffice": {
      "budget": "",
      "openingWeekendUSA": "",
      "grossUSA": "",
      "cumulativeWorldwideGross": ""
    },
    "tagline": "45.6 Billion Won is Child's Play",
    "keywords": "survival,game of death,death,game,blood",
    "keywordList": [
      "survival",
      "game of death",
      "death",
      "game",
      "blood"
    ],
    "similars": [
      {
        "id": "tt10795658",
        "title": "Alice in Borderland",
        "fullTitle": "Alice in Borderland",
        "year": "",
        "image": "https://imdb-api.com/images/original/MV5BZmUwMGI4M2QtYmRlYy00NDQ1LThjNDAtYTI4NDNiNDg5MDViXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_Ratio0.6763_AL_.jpg",
        "plot": "",
        "directors": "",
        "stars": "",
        "genres": "",
        "imDbRating": "7.7"
      },
      {
        "id": "tt6468322",
        "title": "Money Heist",
        "fullTitle": "Money Heist",
        "year": "",
        "image": "https://imdb-api.com/images/original/MV5BNDJkYzY3MzMtMGFhYi00MmQ4LWJkNTgtZGNiZWZmMTMxNzdlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_Ratio0.6763_AL_.jpg",
        "plot": "",
        "directors": "",
        "stars": "",
        "genres": "",
        "imDbRating": "8.2"
      },
      {
        "id": "tt7767422",
        "title": "Sex Education",
        "fullTitle": "Sex Education",
        "year": "",
        "image": "https://imdb-api.com/images/original/MV5BODhmN2Q4ZjUtNzE5Ni00YWQxLThmYjYtM2NkNDEwNmFhMGY3XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_Ratio0.6763_AL_.jpg",
        "plot": "",
        "directors": "",
        "stars": "",
        "genres": "",
        "imDbRating": "8.3"
      },
      {
        "id": "tt4574334",
        "title": "Stranger Things",
        "fullTitle": "Stranger Things",
        "year": "",
        "image": "https://imdb-api.com/images/original/MV5BN2ZmYjg1YmItNWQ4OC00YWM0LWE0ZDktYThjOTZiZjhhN2Q2XkEyXkFqcGdeQXVyNjgxNTQ3Mjk@._V1_Ratio0.6763_AL_.jpg",
        "plot": "",
        "directors": "",
        "stars": "",
        "genres": "",
        "imDbRating": "8.7"
      },
      {
        "id": "tt0944947",
        "title": "Game of Thrones",
        "fullTitle": "Game of Thrones",
        "year": "",
        "image": "https://imdb-api.com/images/original/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_Ratio0.7343_AL_.jpg",
        "plot": "",
        "directors": "",
        "stars": "",
        "genres": "",
        "imDbRating": "9.2"
      },
      {
        "id": "tt0903747",
        "title": "Breaking Bad",
        "fullTitle": "Breaking Bad",
        "year": "",
        "image": "https://imdb-api.com/images/original/MV5BMjhiMzgxZTctNDc1Ni00OTIxLTlhMTYtZTA3ZWFkODRkNmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.7246_AL_.jpg",
        "plot": "",
        "directors": "",
        "stars": "",
        "genres": "",
        "imDbRating": "9.4"
      },
      {
        "id": "tt9140554",
        "title": "Loki",
        "fullTitle": "Loki",
        "year": "",
        "image": "https://imdb-api.com/images/original/MV5BNTkwOTE1ZDYtODQ3Yy00YTYwLTg0YWQtYmVkNmFjNGZlYmRiXkEyXkFqcGdeQXVyNTc4MjczMTM@._V1_Ratio0.6763_AL_.jpg",
        "plot": "",
        "directors": "",
        "stars": "",
        "genres": "",
        "imDbRating": "8.3"
      },
      {
        "id": "tt10574558",
        "title": "Midnight Mass",
        "fullTitle": "Midnight Mass",
        "year": "",
        "image": "https://imdb-api.com/images/original/MV5BNWVmZWQ5ZmItZjc2OC00MTFhLWI4OTEtNWY3MDg0OWY3YTJjXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_Ratio0.6763_AL_.jpg",
        "plot": "",
        "directors": "",
        "stars": "",
        "genres": "",
        "imDbRating": "7.8"
      },
      {
        "id": "tt2442560",
        "title": "Peaky Blinders",
        "fullTitle": "Peaky Blinders",
        "year": "",
        "image": "https://imdb-api.com/images/original/MV5BMTkzNjEzMDEzMF5BMl5BanBnXkFtZTgwMDI0MjE4MjE@._V1_Ratio0.6763_AL_.jpg",
        "plot": "",
        "directors": "",
        "stars": "",
        "genres": "",
        "imDbRating": "8.8"
      },
      {
        "id": "tt10168312",
        "title": "What If...?",
        "fullTitle": "What If...?",
        "year": "",
        "image": "https://imdb-api.com/images/original/MV5BOGYwYTA5M2QtMTk3Zi00ZjdjLWFkNDUtYzg4MjM0ZGI0MGU1XkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_Ratio0.6763_AL_.jpg",
        "plot": "",
        "directors": "",
        "stars": "",
        "genres": "",
        "imDbRating": "7.6"
      },
      {
        "id": "tt2085059",
        "title": "Black Mirror",
        "fullTitle": "Black Mirror",
        "year": "",
        "image": "https://imdb-api.com/images/original/MV5BYTM3YWVhMDMtNjczMy00NGEyLWJhZDctYjNhMTRkNDE0ZTI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.6763_AL_.jpg",
        "plot": "",
        "directors": "",
        "stars": "",
        "genres": "",
        "imDbRating": "8.8"
      },
      {
        "id": "tt5700672",
        "title": "Train to Busan",
        "fullTitle": "Train to Busan",
        "year": "",
        "image": "https://imdb-api.com/images/original/MV5BMTkwOTQ4OTg0OV5BMl5BanBnXkFtZTgwMzQyOTM0OTE@._V1_Ratio0.6763_AL_.jpg",
        "plot": "",
        "directors": "",
        "stars": "",
        "genres": "",
        "imDbRating": "7.6"
      }
    ],
    "tvSeriesInfo": {
      "yearEnd": "2021",
      "creators": "Hwang Dong-hyuk",
      "creatorList": [
        {
          "id": "nm1375363",
          "name": "Hwang Dong-hyuk"
        }
      ],
      "seasons": [
        "1"
      ]
    },
    "tvEpisodeInfo": null,
    "errorMessage": null
  },
  {
    "id": "tt11337908",
    "title": "Maid",
    "originalTitle": "",
    "fullTitle": "Maid (2021– )",
    "type": "TVSeries",
    "year": "2021",
    "image": "https://imdb-api.com/images/original/MV5BZjFjNzhkMTYtNWEyNS00ZTcyLWEwMjgtYjhkZTI2M2M0MDRmXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_Ratio0.7189_AL_.jpg",
    "releaseDate": "",
    "runtimeMins": "",
    "runtimeStr": "",
    "plot": "Inspired by the powerful New York Times best-selling memoir Maid: Hard Work, Low Pay, and a Mother&#39;s Will to Survive by Stephanie Land, Maid will chronicle a single mother who turns to housekeeping to - barely - make ends meet as she battles against poverty, homelessness, and bureaucracy. Told primarily through her point of view, Maid will be a beautiful, alive, gritty, and inspiring exploration of poverty in America.",
    "plotLocal": "",
    "plotLocalIsRtl": false,
    "awards": "",
    "directors": "",
    "directorList": [],
    "writers": "",
    "writerList": [],
    "stars": "Billy Burke, Andie MacDowell, Margaret Qualley",
    "starList": [
      {
        "id": "nm0121605",
        "name": "Billy Burke"
      },
      {
        "id": "nm0000510",
        "name": "Andie MacDowell"
      },
      {
        "id": "nm4960279",
        "name": "Margaret Qualley"
      }
    ],
    "actorList": [
      {
        "id": "nm0121605",
        "image": "https://imdb-api.com/images/original/MV5BMDNjNmUzZWQtODZjYi00MGU2LWJhY2YtMjEyYTUyOTI0ZDhkXkEyXkFqcGdeQXVyNTIyMjAwMw@@._V1_Ratio1.0000_AL_.jpg",
        "name": "Billy Burke",
        "asCharacter": "Hankas Hank"
      },
      {
        "id": "nm0000510",
        "image": "https://imdb-api.com/images/original/MV5BMzc1NTc4Nzk2Nl5BMl5BanBnXkFtZTcwNjMwMzg5Mg@@._V1_Ratio1.0000_AL_.jpg",
        "name": "Andie MacDowell",
        "asCharacter": "Paulaas Paula"
      },
      {
        "id": "nm4960279",
        "image": "https://imdb-api.com/images/original/MV5BYWZmMDFlMDYtYzk3My00YTg1LTllZWUtYzY2Y2QyNjk2NTZmXkEyXkFqcGdeQXVyMzcxMTAwMDM@._V1_Ratio1.1714_AL_.jpg",
        "name": "Margaret Qualley",
        "asCharacter": "Alexas Alex"
      },
      {
        "id": "nm3538718",
        "image": "https://imdb-api.com/images/original/MV5BNzViMjQ4NzQtZDBhNC00ZTlhLTk4NzktYTYyYzE4NjFiZjQ1XkEyXkFqcGdeQXVyMTE1MTYxNDAw._V1_Ratio1.0000_AL_.jpg",
        "name": "Nick Robinson",
        "asCharacter": "Seanas Sean"
      },
      {
        "id": "nm0741242",
        "image": "https://imdb-api.com/images/original/MV5BMjQ4MzQyODI4Nl5BMl5BanBnXkFtZTgwMDk0ODgyMTI@._V1_Ratio1.0000_AL_.jpg",
        "name": "Anika Noni Rose",
        "asCharacter": "Reginaas Regina"
      },
      {
        "id": "nm0897400",
        "image": "https://imdb-api.com/images/original/MV5BMmUyMjgxYmEtMTBhNy00MDRjLWFlYTMtYjYyMjQ5OTg3MTA4XkEyXkFqcGdeQXVyMzQ5NTcyMjg@._V1_Ratio1.3286_AL_.jpg",
        "name": "Tracy Vilar",
        "asCharacter": "Yolandaas Yolanda"
      },
      {
        "id": "nm11971879",
        "image": "https://imdb-api.com/images/original/MV5BZmJjZjUzMTktNTQ0OC00YzZjLTg0OWQtNDA5YmM4MGQzNmY1XkEyXkFqcGdeQXVyMTI1MDkwMzk3._V1_Ratio1.0000_AL_.jpg",
        "name": "Rylea Nevaeh Whittet",
        "asCharacter": "Maddyas Maddy"
      },
      {
        "id": "nm0365484",
        "image": "https://imdb-api.com/images/original/MV5BNDFiYjEwMWUtMGY5Yy00NTBhLTkzNWItMTdlMWFjOGJkY2YxXkEyXkFqcGdeQXVyNzgwODM1NzA@._V1_Ratio1.0000_AL_.jpg",
        "name": "BJ Harrison",
        "asCharacter": "Deniseas Denise"
      },
      {
        "id": "nm1172442",
        "image": "https://imdb-api.com/images/original/MV5BMTkxNjk5NTExMF5BMl5BanBnXkFtZTcwOTQ1MzIyOQ@@._V1_Ratio1.0000_AL_.jpg",
        "name": "Erin Karpluk",
        "asCharacter": "Sharleneas Sharlene"
      },
      {
        "id": "nm1573094",
        "image": "https://imdb-api.com/images/original/MV5BYjhlZDEzYWMtODI2Yy00YjNkLWJmY2QtZmFlNTEwYzMyYThiXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_Ratio1.5000_AL_.jpg",
        "name": "Toby Levins",
        "asCharacter": "Basil Desmondas Basil Desmond"
      },
      {
        "id": "nm0432228",
        "image": "https://imdb-api.com/images/original/MV5BMTY3MjI1NzE2MV5BMl5BanBnXkFtZTgwMjAyMDY0MzE@._V1_Ratio1.0000_AL_.jpg",
        "name": "Alessandro Juliani",
        "asCharacter": "John Marshallas John Marshall"
      },
      {
        "id": "nm6246466",
        "image": "https://imdb-api.com/images/original/MV5BNTljODg1ZWMtNjU2NS00NzMzLThlNTEtNjEyYmNhMDIzYWIxXkEyXkFqcGdeQXVyNTE4OTQ3NTA@._V1_Ratio1.0000_AL_.jpg",
        "name": "Hilaria Larriva",
        "asCharacter": "Brandias Brandi"
      },
      {
        "id": "nm2236560",
        "image": "https://imdb-api.com/images/original/MV5BZjMzM2VjZTctMjQyNy00YTkxLTgxMGMtZTE3NGVjMzQyYzI0XkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_Ratio1.0000_AL_.jpg",
        "name": "Mozhan Marnò",
        "asCharacter": "Taraas Tara"
      },
      {
        "id": "nm7420153",
        "image": "https://imdb-api.com/images/original/MV5BOTIyZWRhN2EtMmExOS00NTcwLTk2YWEtZmEwNzlmNTViOWYyXkEyXkFqcGdeQXVyODU0MTgyNTY@._V1_Ratio1.5000_AL_.jpg",
        "name": "Amy Reid",
        "asCharacter": "Jodyas Jody"
      },
      {
        "id": "nm2917725",
        "image": "https://imdb-api.com/images/original/MV5BMjJmM2NkYTItOTc1MS00ZjY1LWE1NWYtMThmZjM0ODNlMTM0XkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_Ratio1.0000_AL_.jpg",
        "name": "Raymond Ablack",
        "asCharacter": "Nateas Nate"
      },
      {
        "id": "nm2753036",
        "image": "https://imdb-api.com/images/original/MV5BOTk4M2IyNzAtMDg2ZC00MjNiLWE3ZDktM2Y0NzgzZTY0MmE1XkEyXkFqcGdeQXVyNTgxNTg4OQ@@._V1_Ratio1.0000_AL_.jpg",
        "name": "Alison Araya",
        "asCharacter": "Kiaraas Kiara"
      },
      {
        "id": "nm6066360",
        "image": "https://imdb-api.com/images/original/MV5BNTY1NWYwYWItMDRkZC00NzQ1LTgxZmYtNmFiODA2OTFiYzk5XkEyXkFqcGdeQXVyNDg1NjM2MTk@._V1_Ratio1.0000_AL_.jpg",
        "name": "Kristina Capati",
        "asCharacter": "Motheras Mother"
      },
      {
        "id": "nm2368801",
        "image": "https://imdb-api.com/images/original/MV5BMWQwNTQwYmQtOTljNC00MzAzLWEyMDAtNGRiYmY5NGRlM2EwXkEyXkFqcGdeQXVyOTQzMjE1MA@@._V1_Ratio1.0000_AL_.jpg",
        "name": "Leo Chiang",
        "asCharacter": "Bobas Bob"
      }
    ],
    "fullCast": null,
    "genres": "Comedy, Drama",
    "genreList": [
      {
        "key": "Comedy",
        "value": "Comedy"
      },
      {
        "key": "Drama",
        "value": "Drama"
      }
    ],
    "companies": "John Wells Productions, John Wells Productions, LuckyChap Entertainment",
    "companyList": [
      {
        "id": "co0037310",
        "name": "John Wells Productions"
      },
      {
        "id": "co0037310",
        "name": "John Wells Productions"
      },
      {
        "id": "co0542434",
        "name": "LuckyChap Entertainment"
      }
    ],
    "countries": "USA",
    "countryList": [
      {
        "key": "USA",
        "value": "USA"
      }
    ],
    "languages": "English",
    "languageList": [
      {
        "key": "English",
        "value": "English"
      }
    ],
    "contentRating": "",
    "imDbRating": "",
    "imDbRatingVotes": "",
    "metacriticRating": "",
    "ratings": {
      "imDbId": "tt11337908",
      "title": "Maid",
      "fullTitle": "Maid (2021– )",
      "type": "TVSeries",
      "year": "2021",
      "imDb": "",
      "metacritic": "",
      "theMovieDb": "",
      "rottenTomatoes": "",
      "tV_com": "",
      "filmAffinity": "",
      "errorMessage": ""
    },
    "wikipedia": null,
    "posters": {
      "imDbId": "tt11337908",
      "title": "Maid",
      "fullTitle": "Maid (2021– )",
      "type": "TVSeries",
      "year": "2021",
      "posters": [
        {
          "id": "qdgwPpApL1QRzSEnxQQK4bMTG3h.jpg",
          "link": "https://imdb-api.com/posters/original/qdgwPpApL1QRzSEnxQQK4bMTG3h.jpg",
          "aspectRatio": 0.6613756613756614,
          "language": "en",
          "width": 500,
          "height": 756
        }
      ],
      "backdrops": [],
      "errorMessage": ""
    },
    "images": {
      "imDbId": "tt11337908",
      "title": "Maid",
      "fullTitle": "Maid (2021– )",
      "type": "TVSeries",
      "year": "2021",
      "items": [
        {
          "title": "Maid (2021)",
          "image": "https://imdb-api.com/images/original/MV5BZjFjNzhkMTYtNWEyNS00ZTcyLWEwMjgtYjhkZTI2M2M0MDRmXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_Ratio1.0000_AL_.jpg"
        }
      ],
      "errorMessage": ""
    },
    "trailer": {
      "imDbId": "tt11337908",
      "title": "Maid",
      "fullTitle": "Maid (2021– )",
      "type": "TVSeries",
      "year": "2021",
      "videoId": null,
      "videoTitle": null,
      "videoDescription": null,
      "thumbnailUrl": null,
      "uploadDate": null,
      "link": null,
      "linkEmbed": null,
      "errorMessage": "404 Not Founded Error"
    },
    "boxOffice": {
      "budget": "",
      "openingWeekendUSA": "",
      "grossUSA": "",
      "cumulativeWorldwideGross": ""
    },
    "tagline": "",
    "keywords": "mother,father,homelessness,dramedy,inspired",
    "keywordList": [
      "mother",
      "father",
      "homelessness",
      "dramedy",
      "inspired"
    ],
    "similars": [
      {
        "id": "tt11023294",
        "title": "The Humming of the Beast",
        "fullTitle": "The Humming of the Beast",
        "year": "",
        "image": "https://imdb-api.com/images/original/MV5BOGZkNTU4ZjgtM2QzMi00OTRjLWEzYjQtODNlZmU2OWZkZjMwXkEyXkFqcGdeQXVyNDcyMzQ3Njc@._V1_Ratio0.6763_AL_.jpg",
        "plot": "",
        "directors": "",
        "stars": "",
        "genres": "",
        "imDbRating": ""
      },
      {
        "id": "tt6566768",
        "title": "Native Son",
        "fullTitle": "Native Son",
        "year": "",
        "image": "https://imdb-api.com/images/original/MV5BZDY0OTM2OTgtYmM1Mi00ZjE4LTkwY2MtMzA3OGNkZDlkZjliXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_Ratio0.6763_AL_.jpg",
        "plot": "",
        "directors": "",
        "stars": "",
        "genres": "",
        "imDbRating": "5.8"
      }
    ],
    "tvSeriesInfo": {
      "yearEnd": "",
      "creators": "Molly Smith Metzler",
      "creatorList": [
        {
          "id": "nm4030641",
          "name": "Molly Smith Metzler"
        }
      ],
      "seasons": [
        "1"
      ]
    },
    "tvEpisodeInfo": null,
    "errorMessage": ""
  },
  {
    "id": "tt10986410",
    "title": "Ted Lasso",
    "originalTitle": "",
    "fullTitle": "Ted Lasso (2020– )",
    "type": "TVSeries",
    "year": "2020",
    "image": "https://imdb-api.com/images/original/MV5BY2MxYjVlNzAtMDdhOS00N2U2LThlYWQtN2MwMWJjYjFhYzM5XkEyXkFqcGdeQXVyMTAwMzM3NDI3._V1_Ratio0.6762_AL_.jpg",
    "releaseDate": "2020-08-13",
    "runtimeMins": "30",
    "runtimeStr": "30min",
    "plot": "Follows U.S. American football coach Ted Lasso who heads to the U.K. to manage a struggling London football team in the top flight of English football.",
    "plotLocal": "",
    "plotLocalIsRtl": false,
    "awards": "Top rated TV #92 | Awards12 wins & 16 nominations",
    "directors": "",
    "directorList": [],
    "writers": "",
    "writerList": [],
    "stars": "Jason Sudeikis, Hannah Waddingham, Brendan Hunt",
    "starList": [
      {
        "id": "nm0837177",
        "name": "Jason Sudeikis"
      },
      {
        "id": "nm1821446",
        "name": "Hannah Waddingham"
      },
      {
        "id": "nm0402360",
        "name": "Brendan Hunt"
      }
    ],
    "actorList": [
      {
        "id": "nm0837177",
        "image": "https://imdb-api.com/images/original/MV5BMjE3NTE4Nzg3Ml5BMl5BanBnXkFtZTgwODc5OTUxMTI@._V1_Ratio1.0000_AL_.jpg",
        "name": "Jason Sudeikis",
        "asCharacter": "Ted Lassoas Ted Lasso"
      },
      {
        "id": "nm1821446",
        "image": "https://imdb-api.com/images/original/MV5BNjk5ODc5MTU3MF5BMl5BanBnXkFtZTgwOTk2MjI5NDE@._V1_Ratio1.0000_AL_.jpg",
        "name": "Hannah Waddingham",
        "asCharacter": "Rebecca Weltonas Rebecca Welton"
      },
      {
        "id": "nm0402360",
        "image": "https://imdb-api.com/images/original/MV5BN2NiOGM3MDYtYjE2OC00Njc0LTg2OGEtNjA1NzFjNjU5N2MxXkEyXkFqcGdeQXVyMjg4OTM1OQ@@._V1_Ratio1.0000_AL_.jpg",
        "name": "Brendan Hunt",
        "asCharacter": "Coach Beardas Coach Beard"
      },
      {
        "id": "nm0842596",
        "image": "https://imdb-api.com/images/original/MV5BYjJkNzVhMTgtMGZmNi00ODAyLWIwNjQtY2MzYjMxYTBkZjNhXkEyXkFqcGdeQXVyMTE2NzI1NDQ@._V1_Ratio1.0000_AL_.jpg",
        "name": "Jeremy Swift",
        "asCharacter": "Higginsas Higgins"
      },
      {
        "id": "nm4651633",
        "image": "https://imdb-api.com/images/original/MV5BN2UwNGE0OTQtNjNlYy00ZTc2LWFiYWYtYmVkMDM1MTk2ZjVjXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_Ratio1.0286_AL_.jpg",
        "name": "Phil Dunster",
        "asCharacter": "Jamie Tarttas Jamie Tartt"
      },
      {
        "id": "nm2073429",
        "image": "https://imdb-api.com/images/original/MV5BNjIyZTZmNDEtZmQ4Ny00YWFkLWFjOGMtMDFhOTM4ZjliM2Q1XkEyXkFqcGdeQXVyMjAxMDE4NTc@._V1_Ratio1.0000_AL_.jpg",
        "name": "Brett Goldstein",
        "asCharacter": "Roy Kentas Roy Kent"
      },
      {
        "id": "nm2945137",
        "image": "https://imdb-api.com/images/original/MV5BNTBjNzUyODUtMmNhZC00MzgyLThlNTktZGMxNjE2ZTcyYjkzXkEyXkFqcGdeQXVyNTY3MzU2NTY@._V1_Ratio1.0000_AL_.jpg",
        "name": "Nick Mohammed",
        "asCharacter": "Nathan Shelleyas Nathan Shelley"
      },
      {
        "id": "nm1017334",
        "image": "https://imdb-api.com/images/original/MV5BMTQ3NDU5OTY5NV5BMl5BanBnXkFtZTgwNjE5ODA5OTE@._V1_Ratio1.0000_AL_.jpg",
        "name": "Juno Temple",
        "asCharacter": "Keeley Jonesas Keeley Jones"
      },
      {
        "id": "nm8504865",
        "image": "https://imdb-api.com/images/original/MV5BNjM4NzQxMzgtMjQ2OC00ZmY0LWJiMTItMDM2YWI2YzkwYTMzXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_Ratio1.0000_AL_.jpg",
        "name": "Toheeb Jimoh",
        "asCharacter": "Sam Obisanyaas Sam Obisanya"
      },
      {
        "id": "nm6902944",
        "image": "https://imdb-api.com/images/original/MV5BOTM3MDliNTUtZTcwMi00NWQ0LWJjMjctNWZkMTlmNTFlYTkwXkEyXkFqcGdeQXVyMTIzNjkwODU3._V1_Ratio1.0000_AL_.jpg",
        "name": "Billy Harris",
        "asCharacter": "Colinas Colin"
      },
      {
        "id": "nm6703520",
        "image": "https://imdb-api.com/images/original/MV5BZTMwMDQwZjktMjU2ZS00OWI1LTliOTQtZWNmMDYyODkxMzlkXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_Ratio1.0000_AL_.jpg",
        "name": "Kola Bokinni",
        "asCharacter": "Isaacas Isaac"
      },
      {
        "id": "nm6015110",
        "image": "https://imdb-api.com/images/original/MV5BMWMwMzEwNzktNWFjMC00YjM3LWFkNzYtZjI2MzFjYTgzY2U5XkEyXkFqcGdeQXVyNjY1NDg1NTg@._V1_Ratio1.0000_AL_.jpg",
        "name": "Stephen Manas",
        "asCharacter": "Richardas Richard"
      },
      {
        "id": "nm8316037",
        "image": "https://imdb-api.com/images/original/MV5BNTcyMWYzOWEtMTdhOS00ZGFmLWE4Y2YtYTM2ZTFmNmVhYzRlXkEyXkFqcGdeQXVyODIxMjc1NDc@._V1_Ratio1.0000_AL_.jpg",
        "name": "Adam Colborne",
        "asCharacter": "Bazas Baz"
      },
      {
        "id": "nm0916037",
        "image": "https://imdb-api.com/images/original/MV5BNjA0YWI4MmItMDdkYi00OWUxLWJjN2EtZDk0ZDVkNjJmZTY3XkEyXkFqcGdeQXVyNzY5MDk5NA@@._V1_Ratio1.5000_AL_.jpg",
        "name": "Bronson Webb",
        "asCharacter": "Jeremyas Jeremy"
      },
      {
        "id": "nm5482846",
        "image": "https://imdb-api.com/images/original/nopicture.jpg",
        "name": "Kevin Garry",
        "asCharacter": "Paulas Paul"
      },
      {
        "id": "nm0046183",
        "image": "https://imdb-api.com/images/original/MV5BNGNmOTZkZGUtZjk1YS00ZjU4LTkzYTgtYWQ5MTc1ZDM0YjE4XkEyXkFqcGdeQXVyMTAzMjk0NDI1._V1_Ratio1.0000_AL_.jpg",
        "name": "Annette Badland",
        "asCharacter": "Maeas Mae"
      },
      {
        "id": "nm0484202",
        "image": "https://imdb-api.com/images/original/MV5BMzU0YjBjNWMtODVlNi00Yzc0LThmZjUtNTdjYmY4ODA1ZmM4XkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_Ratio1.0000_AL_.jpg",
        "name": "James Lance",
        "asCharacter": "Trent Crimmas Trent Crimm"
      },
      {
        "id": "nm3907801",
        "image": "https://imdb-api.com/images/original/MV5BODYyMjllNDgtOTk2Yy00MDE0LTllNGYtMzg4OTEwMzNhZjQ2XkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_Ratio1.0000_AL_.jpg",
        "name": "Moe Jeudy-Lamour",
        "asCharacter": "Thierry Zoreauxas Thierry Zoreaux"
      }
    ],
    "fullCast": null,
    "genres": "Comedy, Drama, Sport",
    "genreList": [
      {
        "key": "Comedy",
        "value": "Comedy"
      },
      {
        "key": "Drama",
        "value": "Drama"
      },
      {
        "key": "Sport",
        "value": "Sport"
      }
    ],
    "companies": "Ruby's Tuna, Universal Television, Doozer",
    "companyList": [
      {
        "id": "co0816719",
        "name": "Ruby's Tuna"
      },
      {
        "id": "co0046592",
        "name": "Universal Television"
      },
      {
        "id": "co0007700",
        "name": "Doozer"
      }
    ],
    "countries": "USA, UK",
    "countryList": [
      {
        "key": "USA",
        "value": "USA"
      },
      {
        "key": "UK",
        "value": "UK"
      }
    ],
    "languages": "English",
    "languageList": [
      {
        "key": "English",
        "value": "English"
      }
    ],
    "contentRating": "TV-MA",
    "imDbRating": "8.7",
    "imDbRatingVotes": "58964",
    "metacriticRating": "80",
    "ratings": {
      "imDbId": "tt10986410",
      "title": "Ted Lasso",
      "fullTitle": "Ted Lasso (2020– )",
      "type": "TVSeries",
      "year": "2020",
      "imDb": "8.7",
      "metacritic": "80",
      "theMovieDb": "8.5",
      "rottenTomatoes": "94",
      "tV_com": "",
      "filmAffinity": "7.3",
      "errorMessage": ""
    },
    "wikipedia": null,
    "posters": {
      "imDbId": "tt10986410",
      "title": "Ted Lasso",
      "fullTitle": "Ted Lasso (2020– )",
      "type": "TVSeries",
      "year": "2020",
      "posters": [
        {
          "id": "39rtdG2QoPIOISmS6KNdJDes8vy.jpg",
          "link": "https://imdb-api.com/posters/original/39rtdG2QoPIOISmS6KNdJDes8vy.jpg",
          "aspectRatio": 0.6666666666666666,
          "language": "en",
          "width": 2000,
          "height": 3000
        },
        {
          "id": "a3tL7vRFN63zE8IrpjLHtheAcBM.jpg",
          "link": "https://imdb-api.com/posters/original/a3tL7vRFN63zE8IrpjLHtheAcBM.jpg",
          "aspectRatio": 0.6666666666666666,
          "language": "en",
          "width": 1740,
          "height": 2610
        },
        {
          "id": "oX7QdfiQEbyvIvpKgJHRCgbrLdK.jpg",
          "link": "https://imdb-api.com/posters/original/oX7QdfiQEbyvIvpKgJHRCgbrLdK.jpg",
          "aspectRatio": 0.6666666666666666,
          "language": "en",
          "width": 2000,
          "height": 3000
        },
        {
          "id": "iTcH4ebAyoHfYbSbwypAweDkOn1.jpg",
          "link": "https://imdb-api.com/posters/original/iTcH4ebAyoHfYbSbwypAweDkOn1.jpg",
          "aspectRatio": 0.6666666666666666,
          "language": "en",
          "width": 1880,
          "height": 2820
        },
        {
          "id": "oLD27sNIG3QoqG9G9oOldu1VjcZ.jpg",
          "link": "https://imdb-api.com/posters/original/oLD27sNIG3QoqG9G9oOldu1VjcZ.jpg",
          "aspectRatio": 0.6666666666666666,
          "language": "en",
          "width": 2000,
          "height": 3000
        },
        {
          "id": "d6dnY5epjDoOtCSzcZ97qmLhkP7.jpg",
          "link": "https://imdb-api.com/posters/original/d6dnY5epjDoOtCSzcZ97qmLhkP7.jpg",
          "aspectRatio": 0.6666666666666666,
          "language": "en",
          "width": 1680,
          "height": 2520
        },
        {
          "id": "lKSNsuonUq57p7BkJAzoGpz5tl2.jpg",
          "link": "https://imdb-api.com/posters/original/lKSNsuonUq57p7BkJAzoGpz5tl2.jpg",
          "aspectRatio": 0.6666666666666666,
          "language": "en",
          "width": 2000,
          "height": 3000
        },
        {
          "id": "yaL2uLTaYhMB2LFNmqh3Qg0c4dZ.jpg",
          "link": "https://imdb-api.com/posters/original/yaL2uLTaYhMB2LFNmqh3Qg0c4dZ.jpg",
          "aspectRatio": 0.6666666666666666,
          "language": "en",
          "width": 2000,
          "height": 3000
        },
        {
          "id": "exNvBsQ0TuQn3w30u2wefu8lM8X.jpg",
          "link": "https://imdb-api.com/posters/original/exNvBsQ0TuQn3w30u2wefu8lM8X.jpg",
          "aspectRatio": 0.6666666666666666,
          "language": "en",
          "width": 1880,
          "height": 2820
        },
        {
          "id": "mNm7pHOJRRqRBucp8wn4F0D67NU.jpg",
          "link": "https://imdb-api.com/posters/original/mNm7pHOJRRqRBucp8wn4F0D67NU.jpg",
          "aspectRatio": 0.6666666666666666,
          "language": "en",
          "width": 2000,
          "height": 3000
        }
      ],
      "backdrops": [
        {
          "id": "wImNeqxKsqmJ5OBw8j3I37GNFN3.jpg",
          "link": "https://imdb-api.com/posters/original/wImNeqxKsqmJ5OBw8j3I37GNFN3.jpg",
          "aspectRatio": 1.778523489932886,
          "language": "en",
          "width": 2650,
          "height": 1490
        },
        {
          "id": "8rDij8tYynUfu2hMVXynAp2pSjY.jpg",
          "link": "https://imdb-api.com/posters/original/8rDij8tYynUfu2hMVXynAp2pSjY.jpg",
          "aspectRatio": 1.7777777777777777,
          "language": "en",
          "width": 3840,
          "height": 2160
        },
        {
          "id": "v8w9LEje62ThZzIXYOFylemqFUN.jpg",
          "link": "https://imdb-api.com/posters/original/v8w9LEje62ThZzIXYOFylemqFUN.jpg",
          "aspectRatio": 1.7777777777777777,
          "language": "en",
          "width": 3840,
          "height": 2160
        },
        {
          "id": "ayUMWKe6Wow5ixLlKxxlp7IqTiI.jpg",
          "link": "https://imdb-api.com/posters/original/ayUMWKe6Wow5ixLlKxxlp7IqTiI.jpg",
          "aspectRatio": 1.7777777777777777,
          "language": "en",
          "width": 3840,
          "height": 2160
        },
        {
          "id": "hKioaLy5PHm4M0aLTXzi7hWy53D.jpg",
          "link": "https://imdb-api.com/posters/original/hKioaLy5PHm4M0aLTXzi7hWy53D.jpg",
          "aspectRatio": 1.7777777777777777,
          "language": "en",
          "width": 3840,
          "height": 2160
        },
        {
          "id": "pWsaYXj0xARPr3zTMFmTJVAaItY.jpg",
          "link": "https://imdb-api.com/posters/original/pWsaYXj0xARPr3zTMFmTJVAaItY.jpg",
          "aspectRatio": 1.7777777777777777,
          "language": "en",
          "width": 3840,
          "height": 2160
        },
        {
          "id": "6PpO1PvfFTV2IHMu38rafti7is6.jpg",
          "link": "https://imdb-api.com/posters/original/6PpO1PvfFTV2IHMu38rafti7is6.jpg",
          "aspectRatio": 1.7777777777777777,
          "language": "en",
          "width": 3840,
          "height": 2160
        },
        {
          "id": "walTOY4UVC4HFLa7sDza5SgPUaW.jpg",
          "link": "https://imdb-api.com/posters/original/walTOY4UVC4HFLa7sDza5SgPUaW.jpg",
          "aspectRatio": 1.7777777777777777,
          "language": "en",
          "width": 3840,
          "height": 2160
        },
        {
          "id": "bZetRpjaXfZL7TUGcJxFkbIou39.jpg",
          "link": "https://imdb-api.com/posters/original/bZetRpjaXfZL7TUGcJxFkbIou39.jpg",
          "aspectRatio": 1.7777777777777777,
          "language": "en",
          "width": 3840,
          "height": 2160
        },
        {
          "id": "siva4ccafIcPVxdCvFoVb3PePMr.jpg",
          "link": "https://imdb-api.com/posters/original/siva4ccafIcPVxdCvFoVb3PePMr.jpg",
          "aspectRatio": 1.7777777777777777,
          "language": "en",
          "width": 3200,
          "height": 1800
        },
        {
          "id": "tnvv472ddvWlQnOc8k3MCPzB4c1.jpg",
          "link": "https://imdb-api.com/posters/original/tnvv472ddvWlQnOc8k3MCPzB4c1.jpg",
          "aspectRatio": 1.7777777777777777,
          "language": "en",
          "width": 3840,
          "height": 2160
        },
        {
          "id": "nFKI4XIX0fUMFMnwytffw0vASuq.jpg",
          "link": "https://imdb-api.com/posters/original/nFKI4XIX0fUMFMnwytffw0vASuq.jpg",
          "aspectRatio": 1.7777777777777777,
          "language": "en",
          "width": 3840,
          "height": 2160
        },
        {
          "id": "msQjsF343GgBE4yPKiumOcWm94d.jpg",
          "link": "https://imdb-api.com/posters/original/msQjsF343GgBE4yPKiumOcWm94d.jpg",
          "aspectRatio": 1.7777777777777777,
          "language": "en",
          "width": 3840,
          "height": 2160
        },
        {
          "id": "bH6cP0vh8tkxSj2fMiafePqBLHM.jpg",
          "link": "https://imdb-api.com/posters/original/bH6cP0vh8tkxSj2fMiafePqBLHM.jpg",
          "aspectRatio": 1.778584392014519,
          "language": "en",
          "width": 1960,
          "height": 1102
        }
      ],
      "errorMessage": ""
    },
    "images": {
      "imDbId": "tt10986410",
      "title": "Ted Lasso",
      "fullTitle": "Ted Lasso (2020– )",
      "type": "TVSeries",
      "year": "2020",
      "items": [
        {
          "title": "Hannah Waddingham in Ted Lasso (2020)",
          "image": "https://imdb-api.com/images/original/MV5BMzQxM2E4NzUtOTFkMy00ODFhLWJhOGItZDMyZjBjMGEyOTZmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_Ratio1.5000_AL_.jpg"
        },
        {
          "title": "Brett Goldstein in Ted Lasso (2020)",
          "image": "https://imdb-api.com/images/original/MV5BZDg2Zjg5NDgtY2JiNC00OWJkLWFhZjMtMWY3YzE5NmJlMDYxXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Juno Temple in Ted Lasso (2020)",
          "image": "https://imdb-api.com/images/original/MV5BMmYxNzBhZTEtODgzNS00OTNkLWI0MzYtNjg0ZGNmOGIwNWE3XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_Ratio1.5000_AL_.jpg"
        },
        {
          "title": "Brendan Hunt in Ted Lasso (2020)",
          "image": "https://imdb-api.com/images/original/MV5BMTFjMzdiNmUtZDE2YS00OWRlLTk5NDctNzg5OWU0OTNmNDdkXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_Ratio1.5000_AL_.jpg"
        },
        {
          "title": "Nick Mohammed in Ted Lasso (2020)",
          "image": "https://imdb-api.com/images/original/MV5BNDlhNjc3YTctOTgwMy00OTJkLTkzNDktYTgzOTU4ZmZmZGRkXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_Ratio2.0000_AL_.jpg"
        },
        {
          "title": "Jeremy Swift in Ted Lasso (2020)",
          "image": "https://imdb-api.com/images/original/MV5BNmY2ZDFmOTgtYWQ0Mi00MmVhLWE4MmItZThjNzQ2Y2ZlYTJiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Brendan Hunt, Jason Sudeikis, and Nick Mohammed in Ted Lasso (2020)",
          "image": "https://imdb-api.com/images/original/MV5BZTQzYTU4NDQtZWZkZC00MWNmLWIwOTAtMmZjNGY1NjVkYjU1XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_Ratio1.5000_AL_.jpg"
        },
        {
          "title": "Brendan Hunt, Jason Sudeikis, Jeremy Swift, Sarah Niles, and Nick Mohammed in Ted Lasso (2020)",
          "image": "https://imdb-api.com/images/original/MV5BMDI4NjZiN2QtZWQ0Ny00ZGExLWJhM2EtNWU5ZGQwZTE1YTE5XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_Ratio1.7200_AL_.jpg"
        },
        {
          "title": "Brendan Hunt and Jason Sudeikis in Ted Lasso (2020)",
          "image": "https://imdb-api.com/images/original/MV5BN2Y3OWYxOWYtZTY1My00NzU0LWI3NzQtMTJmNzdmMjBlN2QyXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_Ratio1.5800_AL_.jpg"
        },
        {
          "title": "Haroon Rafiq in Ted Lasso (2020)",
          "image": "https://imdb-api.com/images/original/MV5BZTRlOTQwNmItMmQ4NC00MzU0LTg3NzAtYmM2MzNiMjQ0MDczXkEyXkFqcGdeQXVyMDkwNTkwNg@@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Jeremy Swift, Hannah Waddingham, and Bharat Mistri in Ted Lasso (2020)",
          "image": "https://imdb-api.com/images/original/MV5BZTRmODE5YTAtZWI4MS00YWIzLWI3YTctN2ExZWM0YmY2ZDdkXkEyXkFqcGdeQXVyMDkwNTkwNg@@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Jason Sudeikis in Ted Lasso (2020)",
          "image": "https://imdb-api.com/images/original/MV5BMThkZjQ2NTMtYjFlYy00YmEyLTgwYjItNDkxZjliOTBjZmMwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_Ratio2.0000_AL_.jpg"
        },
        {
          "title": "Jason Sudeikis in Ted Lasso (2020)",
          "image": "https://imdb-api.com/images/original/MV5BNTA3NmU2YWEtMjk4ZC00ODJmLWI0MWYtNTg0ZTc0ZWJjMzRhXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_Ratio1.5000_AL_.jpg"
        },
        {
          "title": "Juno Temple at an event for Ted Lasso (2020)",
          "image": "https://imdb-api.com/images/original/MV5BM2VkYWVhMTctMGJmMC00NmFkLTk0YTctZmViOGZmMDRiMzRjXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio1.4800_AL_.jpg"
        },
        {
          "title": "Jason Sudeikis at an event for Ted Lasso (2020)",
          "image": "https://imdb-api.com/images/original/MV5BMTUxN2ZhZDAtOTk2Ni00NzY3LWI4NGEtNGQxODE1MmUxYmU4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio1.3400_AL_.jpg"
        },
        {
          "title": "Jason Sudeikis at an event for Ted Lasso (2020)",
          "image": "https://imdb-api.com/images/original/MV5BYzRlOWRjNjEtNDgwMS00MjNiLWFhNjctOTM2MGEwYzQyNzZiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio1.5000_AL_.jpg"
        },
        {
          "title": "Hannah Waddingham and Brett Goldstein at an event for Ted Lasso (2020)",
          "image": "https://imdb-api.com/images/original/MV5BNTY1MDVmMjItODc4Mi00N2IzLTgzYTAtZWJlNjhmMzIwMzVkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio1.4800_AL_.jpg"
        },
        {
          "title": "Ted Lasso (2020)",
          "image": "https://imdb-api.com/images/original/MV5BZTRhNzg0ZTgtZmMyYy00Yjc5LTkyNTAtNzEzODIyZDE5NTNmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_Ratio1.0000_AL_.jpg"
        },
        {
          "title": "Jason Sudeikis in Ted Lasso (2020)",
          "image": "https://imdb-api.com/images/original/MV5BNzBkZmNiZGYtZjc3OC00OWVkLWI1NTUtOTI2MmFhMjg4MjI5XkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_Ratio1.0000_AL_.jpg"
        },
        {
          "title": "Jason Sudeikis in Ted Lasso (2020)",
          "image": "https://imdb-api.com/images/original/MV5BYWIxMWFhMjMtYjYyOC00MzllLTlmODgtNTMwYzliMjgxNjljXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_Ratio1.0400_AL_.jpg"
        },
        {
          "title": "Ted Lasso (2020)",
          "image": "https://imdb-api.com/images/original/MV5BN2IyMGM2N2UtZThlZC00ZDgzLTljMmMtYjkwNjc4MTBjZDM1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Jason Sudeikis and Hannah Waddingham in Ted Lasso (2020)",
          "image": "https://imdb-api.com/images/original/MV5BYTA2MTc5MmYtODhlNi00Y2E2LThhMDktNjVkMzYwNDdiOTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Kiki May and Hannah Waddingham in Ted Lasso (2020)",
          "image": "https://imdb-api.com/images/original/MV5BZWJhNDNjNGQtMDNkMS00N2YxLTk1ZjktYmZlMDZiYjlhZDU3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Brett Goldstein in Ted Lasso (2020)",
          "image": "https://imdb-api.com/images/original/MV5BNzFmY2NlY2YtNmE0My00Y2RkLTgyYjktMzI1YWRkN2IxZGFkXkEyXkFqcGdeQXVyODQ4MjU1MDk@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Jason Sudeikis in Ted Lasso (2020)",
          "image": "https://imdb-api.com/images/original/MV5BMjk1ZjExNDktMjcxMC00OGJhLWE3MjItNzI0OTM2NTRiNzA5XkEyXkFqcGdeQXVyODQ4MjU1MDk@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Ted Lasso (2020)",
          "image": "https://imdb-api.com/images/original/MV5BZGY3YmI0NmItYjU2MC00MzRkLWI4OGYtOTI3MmYyM2E4Nzg1XkEyXkFqcGdeQXVyMDU5MDEyMA@@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Hannah Waddingham in Ted Lasso (2020)",
          "image": "https://imdb-api.com/images/original/MV5BOThjNGQyNjAtNWFkYi00ZDY4LTgxYjEtOWM0YWQzNWJiZGI1XkEyXkFqcGdeQXVyMDU5MDEyMA@@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Brendan Hunt, Jason Sudeikis, and Nick Mohammed in Ted Lasso (2020)",
          "image": "https://imdb-api.com/images/original/MV5BYTNiMWQxNzgtYmRjYy00YTI2LThiOWItZjljZDU0MDljZTM0XkEyXkFqcGdeQXVyMDU5MDEyMA@@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Brett Goldstein in Ted Lasso (2020)",
          "image": "https://imdb-api.com/images/original/MV5BYTEwMGI3OWYtOWNiNC00MjI5LTgzYzMtNWYyYmFlMTZiM2IyXkEyXkFqcGdeQXVyMDU5MDEyMA@@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Kola Bokinni in Ted Lasso (2020)",
          "image": "https://imdb-api.com/images/original/MV5BYzc3NmVjMWMtNTYwZi00YWUwLThmNDItZWI1MmZlYmQ3NmVjXkEyXkFqcGdeQXVyMDU5MDEyMA@@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Jason Sudeikis in Ted Lasso (2020)",
          "image": "https://imdb-api.com/images/original/MV5BYWFhMmQ4NjItMGVjMS00YWJhLTg0NGUtM2FiMGQwYzczMTFkXkEyXkFqcGdeQXVyMDU5MDEyMA@@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Brett Goldstein and Phil Dunster in Ted Lasso (2020)",
          "image": "https://imdb-api.com/images/original/MV5BNzI5YmY4MGYtYTE5ZS00OGE1LWE1OGEtZTQ0ZTM1Mjk4OTZjXkEyXkFqcGdeQXVyMDU5MDEyMA@@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Brett Goldstein and Phil Dunster in Ted Lasso (2020)",
          "image": "https://imdb-api.com/images/original/MV5BYzA4NWU2ZjAtZjEwYS00ZTJmLWEwNTQtYTFlOWM5NmNmM2ZiXkEyXkFqcGdeQXVyMDU5MDEyMA@@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Brendan Hunt and Jason Sudeikis in Ted Lasso (2020)",
          "image": "https://imdb-api.com/images/original/MV5BZTUzMTU1NDQtMTI3MC00ZjhhLWI0MGQtMzBiZGY0ODA5MWE4XkEyXkFqcGdeQXVyMDU5MDEyMA@@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Elodie Blomfield in Ted Lasso (2020)",
          "image": "https://imdb-api.com/images/original/MV5BYWJjMDdhMmUtY2VkOS00NjIxLWJhZjEtNjBlMzcyNTNkNzQyXkEyXkFqcGdeQXVyMDU5MDEyMA@@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Jimmy Akingbola in Ted Lasso (2020)",
          "image": "https://imdb-api.com/images/original/MV5BNTY4MzgzMjctZTcyYy00YWI3LWE0OTgtNmU0ZWEzNzlmODJkXkEyXkFqcGdeQXVyMDU5MDEyMA@@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Elodie Blomfield and Brett Goldstein in Ted Lasso (2020)",
          "image": "https://imdb-api.com/images/original/MV5BNWQ4ZjE4MDktZDg2Yi00ODEzLTlmZDItN2I2MjdhMGE2ZjJjXkEyXkFqcGdeQXVyMDU5MDEyMA@@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Juno Temple and Phil Dunster in Ted Lasso (2020)",
          "image": "https://imdb-api.com/images/original/MV5BMDJlYmQzNjItYTg4ZS00ZDc5LWJlOGUtMWEyZDJiNGFlYWQ3XkEyXkFqcGdeQXVyMDU5MDEyMA@@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Hannah Waddingham in Ted Lasso (2020)",
          "image": "https://imdb-api.com/images/original/MV5BOTExOTJjMGUtOGE1ZC00M2FkLWIwZWEtZTg1Y2IwYjZjZDQxXkEyXkFqcGdeQXVyMDU5MDEyMA@@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Jason Sudeikis and Juno Temple in Ted Lasso (2020)",
          "image": "https://imdb-api.com/images/original/MV5BNGFjYzRmZGItZTUyZC00Y2EzLWEyMGItYjE5YWQxZDdlZWJmXkEyXkFqcGdeQXVyMDU5MDEyMA@@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Ted Lasso (2020)",
          "image": "https://imdb-api.com/images/original/MV5BNDVhNTRkYTItYzQ3Zi00YmMxLWJhNzctZDM3YjNhMDI1MWViXkEyXkFqcGdeQXVyMDU5MDEyMA@@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Jason Sudeikis in Ted Lasso (2020)",
          "image": "https://imdb-api.com/images/original/MV5BYWVlODNmMzctYjBjNi00NzljLWE5MDEtMDFiMGRlZTg2Zjk1XkEyXkFqcGdeQXVyMDU5MDEyMA@@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Brendan Hunt, Stephen Samson, Jason Sudeikis, Nathanjohn Carter, and Nick Mohammed in Ted Lasso (2020)",
          "image": "https://imdb-api.com/images/original/MV5BOTZjYzRlNGItMDhiNS00M2VhLTk5NmUtZDRlYWM4YjA0YjFhXkEyXkFqcGdeQXVyMjM1OTE3ODQ@._V1_Ratio1.9000_AL_.jpg"
        },
        {
          "title": "Juno Temple, Brett Goldstein, and Phil Dunster in Ted Lasso (2020)",
          "image": "https://imdb-api.com/images/original/MV5BODgxMDEzNDctMWVhNC00ZjNiLTg3NGEtZjhjZWNkMDIyZGNmXkEyXkFqcGdeQXVyNzgxMzc3OTc@._V1_Ratio2.0000_AL_.jpg"
        },
        {
          "title": "Hannah Waddingham in Ted Lasso (2020)",
          "image": "https://imdb-api.com/images/original/MV5BMmIyYmE4OGYtMzIyNS00NzdlLWJhNjEtOGIwZDA5MzAxYzdlXkEyXkFqcGdeQXVyNzgxMzc3OTc@._V1_Ratio2.0000_AL_.jpg"
        },
        {
          "title": "Hannah Waddingham in Ted Lasso (2020)",
          "image": "https://imdb-api.com/images/original/MV5BOTI2NGZiNWItZTY1Zi00ODBmLWFjNGEtYWFmNGRjODc1ZWY0XkEyXkFqcGdeQXVyNzgxMzc3OTc@._V1_Ratio2.0000_AL_.jpg"
        },
        {
          "title": "Brendan Hunt, Jason Sudeikis, and Nick Mohammed in Ted Lasso (2020)",
          "image": "https://imdb-api.com/images/original/MV5BMWU3NmMxMmYtMmExOC00MjEwLTk1MDctMzFmNjFkMjkxMzhmXkEyXkFqcGdeQXVyNzgxMzc3OTc@._V1_Ratio2.0000_AL_.jpg"
        },
        {
          "title": "Nick Mohammed in Ted Lasso (2020)",
          "image": "https://imdb-api.com/images/original/MV5BZDZhMjM2YWYtMmUzMS00ZmU2LWFlNTItOGZlMmI2NGNiOTQ4XkEyXkFqcGdeQXVyNzgxMzc3OTc@._V1_Ratio2.0000_AL_.jpg"
        }
      ],
      "errorMessage": ""
    },
    "trailer": {
      "imDbId": "tt10986410",
      "title": "Ted Lasso",
      "fullTitle": "Ted Lasso (TV Series 2020– )",
      "type": "TVSeries",
      "year": "2020",
      "videoId": "vi1834597913",
      "videoTitle": "Watch Now on Apple TV+",
      "videoDescription": "Follows US American Football coach Ted Lasso heading to the UK to manage a struggling London soccer team in the top flight of English football.",
      "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BNDg0YTBlMWItZWQxNi00MzM0LThhNmMtNTZlZmVmNmU2MjdkXkEyXkFqcGdeQXZ3ZXNsZXk@._V1_.jpg",
      "uploadDate": "08/14/2020 16:27:18",
      "link": "https://www.imdb.com/video/vi1834597913",
      "linkEmbed": "https://www.imdb.com/video/imdb/vi1834597913/imdb/embed",
      "errorMessage": ""
    },
    "boxOffice": {
      "budget": "",
      "openingWeekendUSA": "",
      "grossUSA": "",
      "cumulativeWorldwideGross": ""
    },
    "tagline": "Out of His League",
    "keywords": "football,football manager,assistant coach,american abroad,american in england",
    "keywordList": [
      "football",
      "football manager",
      "assistant coach",
      "american abroad",
      "american in england"
    ],
    "similars": [
      {
        "id": "tt7203552",
        "title": "The Morning Show",
        "fullTitle": "The Morning Show",
        "year": "",
        "image": "https://imdb-api.com/images/original/MV5BMjE4OTM1MGEtMmFmYi00MTkzLTgwMGItMWRiZjJmMzUzNjRkXkEyXkFqcGdeQXVyNDMzNDc4Mg@@._V1_Ratio0.6763_AL_.jpg",
        "plot": "",
        "directors": "",
        "stars": "",
        "genres": "",
        "imDbRating": "8.4"
      },
      {
        "id": "tt8879940",
        "title": "Mythic Quest: Raven's Banquet",
        "fullTitle": "Mythic Quest: Raven's Banquet",
        "year": "",
        "image": "https://imdb-api.com/images/original/MV5BMzBhOTZlMjEtMzAyZS00MzI2LTk4YjItNGIzNzQ3ZGY1ZWQ0XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_Ratio0.6763_AL_.jpg",
        "plot": "",
        "directors": "",
        "stars": "",
        "genres": "",
        "imDbRating": "7.7"
      },
      {
        "id": "tt3526078",
        "title": "Schitt's Creek",
        "fullTitle": "Schitt's Creek",
        "year": "",
        "image": "https://imdb-api.com/images/original/MV5BNWQ1ZmM3MTQtNTVhZC00MWVlLWI5ZjgtYmZiYWQxZjUzZWM0XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_Ratio0.6763_AL_.jpg",
        "plot": "",
        "directors": "",
        "stars": "",
        "genres": "",
        "imDbRating": "8.5"
      },
      {
        "id": "tt1190634",
        "title": "The Boys",
        "fullTitle": "The Boys",
        "year": "",
        "image": "https://imdb-api.com/images/original/MV5BNGEyOGJiNWEtMTgwMi00ODU4LTlkMjItZWI4NjFmMzgxZGY2XkEyXkFqcGdeQXVyNjcyNjcyMzQ@._V1_Ratio0.6763_AL_.jpg",
        "plot": "",
        "directors": "",
        "stars": "",
        "genres": "",
        "imDbRating": "8.7"
      },
      {
        "id": "tt7660850",
        "title": "Succession",
        "fullTitle": "Succession",
        "year": "",
        "image": "https://imdb-api.com/images/original/MV5BZDMyY2I0ZjEtMzc4Yi00MTQxLWI1MWYtOWJjNjIwMTMyYWFjXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.6763_AL_.jpg",
        "plot": "",
        "directors": "",
        "stars": "",
        "genres": "",
        "imDbRating": "8.6"
      },
      {
        "id": "tt0944947",
        "title": "Game of Thrones",
        "fullTitle": "Game of Thrones",
        "year": "",
        "image": "https://imdb-api.com/images/original/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_Ratio0.7343_AL_.jpg",
        "plot": "",
        "directors": "",
        "stars": "",
        "genres": "",
        "imDbRating": "9.3"
      },
      {
        "id": "tt0386676",
        "title": "The Office",
        "fullTitle": "The Office",
        "year": "",
        "image": "https://imdb-api.com/images/original/MV5BMDNkOTE4NDQtMTNmYi00MWE0LWE4ZTktYTc0NzhhNWIzNzJiXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_Ratio0.6763_AL_.jpg",
        "plot": "",
        "directors": "",
        "stars": "",
        "genres": "",
        "imDbRating": "8.9"
      },
      {
        "id": "tt10048342",
        "title": "The Queen's Gambit",
        "fullTitle": "The Queen's Gambit",
        "year": "",
        "image": "https://imdb-api.com/images/original/MV5BM2EwMmRhMmUtMzBmMS00ZDQ3LTg4OGEtNjlkODk3ZTMxMmJlXkEyXkFqcGdeQXVyMjM5ODk1NDU@._V1_Ratio0.6763_AL_.jpg",
        "plot": "",
        "directors": "",
        "stars": "",
        "genres": "",
        "imDbRating": "8.6"
      },
      {
        "id": "tt5071412",
        "title": "Ozark",
        "fullTitle": "Ozark",
        "year": "",
        "image": "https://imdb-api.com/images/original/MV5BODIyNzk5NDg5M15BMl5BanBnXkFtZTgwMTE5NjA5MjI@._V1_Ratio0.6763_AL_.jpg",
        "plot": "",
        "directors": "",
        "stars": "",
        "genres": "",
        "imDbRating": "8.4"
      },
      {
        "id": "tt2304589",
        "title": "Defending Jacob",
        "fullTitle": "Defending Jacob",
        "year": "",
        "image": "https://imdb-api.com/images/original/MV5BZTM4ODA5MWUtMzA2OC00MGZmLTg3NGEtZTFhNDhmMDgxYjViXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_Ratio0.6763_AL_.jpg",
        "plot": "",
        "directors": "",
        "stars": "",
        "genres": "",
        "imDbRating": "7.9"
      },
      {
        "id": "tt4574334",
        "title": "Stranger Things",
        "fullTitle": "Stranger Things",
        "year": "",
        "image": "https://imdb-api.com/images/original/MV5BN2ZmYjg1YmItNWQ4OC00YWM0LWE0ZDktYThjOTZiZjhhN2Q2XkEyXkFqcGdeQXVyNjgxNTQ3Mjk@._V1_Ratio0.6763_AL_.jpg",
        "plot": "",
        "directors": "",
        "stars": "",
        "genres": "",
        "imDbRating": "8.7"
      },
      {
        "id": "tt0108778",
        "title": "Friends",
        "fullTitle": "Friends",
        "year": "",
        "image": "https://imdb-api.com/images/original/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_Ratio0.6860_AL_.jpg",
        "plot": "",
        "directors": "",
        "stars": "",
        "genres": "",
        "imDbRating": "8.9"
      }
    ],
    "tvSeriesInfo": {
      "yearEnd": "",
      "creators": "Brendan Hunt, Joe Kelly, Bill Lawrence",
      "creatorList": [
        {
          "id": "nm0402360",
          "name": "Brendan Hunt"
        },
        {
          "id": "nm1918708",
          "name": "Joe Kelly"
        },
        {
          "id": "nm0492639",
          "name": "Bill Lawrence"
        }
      ],
      "seasons": [
        "1"
      ]
    },
    "tvEpisodeInfo": null,
    "errorMessage": ""
  },
  {
    "id": "tt7335184",
    "title": "You",
    "originalTitle": "",
    "fullTitle": "You (TV Series 2018– )",
    "type": "TVSeries",
    "year": "2018",
    "image": "https://imdb-api.com/images/original/MV5BZDJjOTg4OWYtYWIyOS00MjQ3LTg5ZDktYzU2N2RkNmYzNjZlXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_Ratio0.6866_AL_.jpg",
    "releaseDate": "2018-09-09",
    "runtimeMins": "45",
    "runtimeStr": "45mins",
    "plot": "Based on Caroline Kepnes' best-selling novel of the same name, YOU is a 21st century love story that asks, \"What would you do for love?\" When a brilliant bookstore manager crosses paths with an aspiring writer, his answer becomes clear: anything. Using the internet and social media as his tools to gather the most intimate of details and get close to her, a charming and awkward crush quickly becomes obsession as he quietly and strategically removes every obstacle - and person - in his way.",
    "plotLocal": "",
    "plotLocalIsRtl": false,
    "awards": "2 wins & 5 nominations.",
    "directors": "",
    "directorList": [],
    "writers": "",
    "writerList": [],
    "stars": "Penn Badgley, Victoria Pedretti, Ambyr Childers, Elizabeth Lail",
    "starList": [
      {
        "id": "nm0046112",
        "name": "Penn Badgley"
      },
      {
        "id": "nm6442992",
        "name": "Victoria Pedretti"
      },
      {
        "id": "nm1024107",
        "name": "Ambyr Childers"
      },
      {
        "id": "nm5634768",
        "name": "Elizabeth Lail"
      }
    ],
    "actorList": [
      {
        "id": "nm0046112",
        "image": "https://imdb-api.com/images/original/MV5BMTc0NjI2Nzg4M15BMl5BanBnXkFtZTcwODE3OTcxNA@@._V1_Ratio0.7273_AL_.jpg",
        "name": "Penn Badgley",
        "asCharacter": "Joe Goldberg 30 episodes, 2018-2021"
      },
      {
        "id": "nm6442992",
        "image": "https://imdb-api.com/images/original/MV5BNzlmY2VkODEtNzgzYS00MGE5LWJmZTMtOWZlMTg2ZmQ5ODMwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio1.5000_AL_.jpg",
        "name": "Victoria Pedretti",
        "asCharacter": "Love Quinn 20 episodes, 2019-2021"
      },
      {
        "id": "nm1024107",
        "image": "https://imdb-api.com/images/original/MV5BZmY1NWM3NjUtMmU3Mi00NDU3LWJiOGQtMDkxOTRlODBiZGQ1XkEyXkFqcGdeQXVyMjAwNzA5MTM@._V1_Ratio0.7273_AL_.jpg",
        "name": "Ambyr Childers",
        "asCharacter": "Candace Stone 14 episodes, 2018-2019"
      }
    ],
    "fullCast": null,
    "genres": "Crime, Drama, Romance, Thriller",
    "genreList": [
      {
        "key": "Crime",
        "value": "Crime"
      },
      {
        "key": "Drama",
        "value": "Drama"
      },
      {
        "key": "Romance",
        "value": "Romance"
      },
      {
        "key": "Thriller",
        "value": "Thriller"
      }
    ],
    "companies": "A+E Studios, Alloy Entertainment, Berlanti Productions",
    "companyList": [
      {
        "id": "co0467028",
        "name": "A+E Studios"
      },
      {
        "id": "co0142434",
        "name": "Alloy Entertainment"
      },
      {
        "id": "co0330789",
        "name": "Berlanti Productions"
      }
    ],
    "countries": "USA",
    "countryList": [
      {
        "key": "USA",
        "value": "USA"
      }
    ],
    "languages": "English",
    "languageList": [
      {
        "key": "English",
        "value": "English"
      }
    ],
    "contentRating": "TV-MA",
    "imDbRating": "7.7",
    "imDbRatingVotes": "148825",
    "metacriticRating": "74",
    "ratings": {
      "imDbId": "tt7335184",
      "title": "You",
      "fullTitle": "You (TV Series 2018– )",
      "type": "TVSeries",
      "year": "2018",
      "imDb": "7.7",
      "metacritic": "74",
      "theMovieDb": "8.1",
      "rottenTomatoes": "90",
      "tV_com": "",
      "filmAffinity": "6.3",
      "errorMessage": ""
    },
    "wikipedia": null,
    "posters": {
      "imDbId": "tt7335184",
      "title": "You",
      "fullTitle": "You (2018– )",
      "type": "TVSeries",
      "year": "2018",
      "posters": [
        {
          "id": "yxIdKGEjagaLs5kMjw92kAHmopH.jpg",
          "link": "https://imdb-api.com/posters/original/yxIdKGEjagaLs5kMjw92kAHmopH.jpg",
          "aspectRatio": 0.6666666666666666,
          "language": "en",
          "width": 1250,
          "height": 1875
        },
        {
          "id": "1xbv5eOS1YWR4XxuBshgOLGmtJ1.jpg",
          "link": "https://imdb-api.com/posters/original/1xbv5eOS1YWR4XxuBshgOLGmtJ1.jpg",
          "aspectRatio": 0.68,
          "language": "en",
          "width": 680,
          "height": 1000
        },
        {
          "id": "9qZUrhcFVI9MNznVJxdfcrmifof.jpg",
          "link": "https://imdb-api.com/posters/original/9qZUrhcFVI9MNznVJxdfcrmifof.jpg",
          "aspectRatio": 0.6666666666666666,
          "language": "en",
          "width": 2000,
          "height": 3000
        },
        {
          "id": "fjoaNUJTkih44B2PE1gpY08stkg.jpg",
          "link": "https://imdb-api.com/posters/original/fjoaNUJTkih44B2PE1gpY08stkg.jpg",
          "aspectRatio": 0.6666666666666666,
          "language": "en",
          "width": 1536,
          "height": 2304
        },
        {
          "id": "f4ILZqjZASWiipDRctMI6SnvLbW.jpg",
          "link": "https://imdb-api.com/posters/original/f4ILZqjZASWiipDRctMI6SnvLbW.jpg",
          "aspectRatio": 0.6668,
          "language": "en",
          "width": 1667,
          "height": 2500
        },
        {
          "id": "ly5sVh5BzutwKUIMooG6ajj2YtO.jpg",
          "link": "https://imdb-api.com/posters/original/ly5sVh5BzutwKUIMooG6ajj2YtO.jpg",
          "aspectRatio": 0.6666666666666666,
          "language": "en",
          "width": 830,
          "height": 1245
        },
        {
          "id": "2OhMuKrnsS3vv2ltIv1djG4fyhW.jpg",
          "link": "https://imdb-api.com/posters/original/2OhMuKrnsS3vv2ltIv1djG4fyhW.jpg",
          "aspectRatio": 0.6666666666666666,
          "language": "en",
          "width": 1920,
          "height": 2880
        },
        {
          "id": "6A1cljmEY8No7R1yu3yYGEXaCUa.jpg",
          "link": "https://imdb-api.com/posters/original/6A1cljmEY8No7R1yu3yYGEXaCUa.jpg",
          "aspectRatio": 0.6666666666666666,
          "language": "en",
          "width": 960,
          "height": 1440
        },
        {
          "id": "eakZ6MWPNbRquL7UvV7HGDzBBjh.jpg",
          "link": "https://imdb-api.com/posters/original/eakZ6MWPNbRquL7UvV7HGDzBBjh.jpg",
          "aspectRatio": 0.6666666666666666,
          "language": "en",
          "width": 2000,
          "height": 3000
        },
        {
          "id": "jlkizJCeHbr0K1DtXJD7mGO9FZ8.jpg",
          "link": "https://imdb-api.com/posters/original/jlkizJCeHbr0K1DtXJD7mGO9FZ8.jpg",
          "aspectRatio": 0.6666666666666666,
          "language": "en",
          "width": 1250,
          "height": 1875
        },
        {
          "id": "61TKMBdufFqKEAxMbQHK1Vh3lBM.jpg",
          "link": "https://imdb-api.com/posters/original/61TKMBdufFqKEAxMbQHK1Vh3lBM.jpg",
          "aspectRatio": 0.6663113006396588,
          "language": "en",
          "width": 1250,
          "height": 1876
        },
        {
          "id": "rlIuxxLjSSqYEodhVHCXI1GMLCl.jpg",
          "link": "https://imdb-api.com/posters/original/rlIuxxLjSSqYEodhVHCXI1GMLCl.jpg",
          "aspectRatio": 0.6666666666666666,
          "language": "en",
          "width": 1400,
          "height": 2100
        },
        {
          "id": "di70Co7e1v1dulIZWNRDGHFn1s4.jpg",
          "link": "https://imdb-api.com/posters/original/di70Co7e1v1dulIZWNRDGHFn1s4.jpg",
          "aspectRatio": 0.68,
          "language": "en",
          "width": 680,
          "height": 1000
        },
        {
          "id": "agLm2qRDrOOy8g8BmcAQ7eSOlfu.jpg",
          "link": "https://imdb-api.com/posters/original/agLm2qRDrOOy8g8BmcAQ7eSOlfu.jpg",
          "aspectRatio": 0.6666666666666666,
          "language": "en",
          "width": 960,
          "height": 1440
        },
        {
          "id": "ry1VItWlvKn4hpr2EykZztnLZtl.jpg",
          "link": "https://imdb-api.com/posters/original/ry1VItWlvKn4hpr2EykZztnLZtl.jpg",
          "aspectRatio": 0.6666666666666666,
          "language": "en",
          "width": 500,
          "height": 750
        }
      ],
      "backdrops": [
        {
          "id": "yA2WBBIcKSsmOyYzlbE9y4r9wua.jpg",
          "link": "https://imdb-api.com/posters/original/yA2WBBIcKSsmOyYzlbE9y4r9wua.jpg",
          "aspectRatio": 1.7798796216680997,
          "language": "en",
          "width": 2070,
          "height": 1163
        },
        {
          "id": "sa7Ya0Rc1KgETjDSmdmfuZZO4kr.jpg",
          "link": "https://imdb-api.com/posters/original/sa7Ya0Rc1KgETjDSmdmfuZZO4kr.jpg",
          "aspectRatio": 1.7777777777777777,
          "language": "en",
          "width": 2048,
          "height": 1152
        },
        {
          "id": "gzOIymABxmetAECXtazEYCpMmfb.jpg",
          "link": "https://imdb-api.com/posters/original/gzOIymABxmetAECXtazEYCpMmfb.jpg",
          "aspectRatio": 1.7777777777777777,
          "language": "en",
          "width": 3840,
          "height": 2160
        },
        {
          "id": "q7T2MO1Vk0RQQhm9BHXXQSKc05u.jpg",
          "link": "https://imdb-api.com/posters/original/q7T2MO1Vk0RQQhm9BHXXQSKc05u.jpg",
          "aspectRatio": 1.7777777777777777,
          "language": "en",
          "width": 2048,
          "height": 1152
        },
        {
          "id": "rErFxauuHqwUja6riV0U0pdAM4P.jpg",
          "link": "https://imdb-api.com/posters/original/rErFxauuHqwUja6riV0U0pdAM4P.jpg",
          "aspectRatio": 1.7777777777777777,
          "language": "en",
          "width": 1920,
          "height": 1080
        },
        {
          "id": "wa2ZWxIWFcrkjWrRy0KONmc7AtS.jpg",
          "link": "https://imdb-api.com/posters/original/wa2ZWxIWFcrkjWrRy0KONmc7AtS.jpg",
          "aspectRatio": 1.7777777777777777,
          "language": "en",
          "width": 1920,
          "height": 1080
        },
        {
          "id": "3elZwXXxqV26ABGmUQCrpe0S75F.jpg",
          "link": "https://imdb-api.com/posters/original/3elZwXXxqV26ABGmUQCrpe0S75F.jpg",
          "aspectRatio": 1.7777777777777777,
          "language": "en",
          "width": 2048,
          "height": 1152
        },
        {
          "id": "8z4hServFPKxWqHKYaKWUAiVxS9.jpg",
          "link": "https://imdb-api.com/posters/original/8z4hServFPKxWqHKYaKWUAiVxS9.jpg",
          "aspectRatio": 1.7777777777777777,
          "language": "en",
          "width": 1920,
          "height": 1080
        },
        {
          "id": "qhlsekitIHothsc5laOMkIYNzTs.jpg",
          "link": "https://imdb-api.com/posters/original/qhlsekitIHothsc5laOMkIYNzTs.jpg",
          "aspectRatio": 1.7777777777777777,
          "language": "en",
          "width": 1920,
          "height": 1080
        },
        {
          "id": "nDGHR0RY5cIfiKrUuoJcHlNRiD2.jpg",
          "link": "https://imdb-api.com/posters/original/nDGHR0RY5cIfiKrUuoJcHlNRiD2.jpg",
          "aspectRatio": 1.7777777777777777,
          "language": "en",
          "width": 1920,
          "height": 1080
        },
        {
          "id": "eP6G6IQZrb2WHN7gl5RJBjW9uOa.jpg",
          "link": "https://imdb-api.com/posters/original/eP6G6IQZrb2WHN7gl5RJBjW9uOa.jpg",
          "aspectRatio": 1.7777777777777777,
          "language": "en",
          "width": 1920,
          "height": 1080
        }
      ],
      "errorMessage": ""
    },
    "images": {
      "imDbId": "tt7335184",
      "title": "You",
      "fullTitle": "You (2018– )",
      "type": "TVSeries",
      "year": "2018",
      "items": [
        {
          "title": "Penn Badgley and Victoria Pedretti in You (2018)",
          "image": "https://imdb-api.com/images/original/MV5BYjhiZDM0YTctYjlkYS00NjY1LTkwYWEtMTZiYTkxNTQwY2E1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio2.0000_AL_.jpg"
        },
        {
          "title": "Penn Badgley and Victoria Pedretti in You (2018)",
          "image": "https://imdb-api.com/images/original/MV5BMTQzMmE2OTQtZGJjMi00MjVhLTk0YzQtYjY0YzM1MDQyY2QzXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_Ratio1.5000_AL_.jpg"
        },
        {
          "title": "Penn Badgley and Victoria Pedretti in You (2018)",
          "image": "https://imdb-api.com/images/original/MV5BNDZlNWVhYjMtMWYxNi00OTQyLWJkNTYtMDRiYTJlMDA4ZTM4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio1.5000_AL_.jpg"
        },
        {
          "title": "Shay Mitchell and Elizabeth Lail in You (2018)",
          "image": "https://imdb-api.com/images/original/MV5BNjI0MzYzNjU5Ml5BMl5BanBnXkFtZTgwMTk0NzA4NjM@._V1_Ratio1.5000_AL_.jpg"
        },
        {
          "title": "Penn Badgley in You (2018)",
          "image": "https://imdb-api.com/images/original/MV5BMTA3NTg1OTM0OTNeQTJeQWpwZ15BbWU4MDI5NDcwODYz._V1_Ratio1.5000_AL_.jpg"
        },
        {
          "title": "Shay Mitchell and Elizabeth Lail in You (2018)",
          "image": "https://imdb-api.com/images/original/MV5BMjA2NzQzMDY3Ml5BMl5BanBnXkFtZTgwMzk0NzA4NjM@._V1_Ratio1.5000_AL_.jpg"
        },
        {
          "title": "Shay Mitchell in You (2018)",
          "image": "https://imdb-api.com/images/original/MV5BNjU3NDQ3OTg5N15BMl5BanBnXkFtZTgwNDk0NzA4NjM@._V1_Ratio1.5000_AL_.jpg"
        },
        {
          "title": "Penn Badgley in You (2018)",
          "image": "https://imdb-api.com/images/original/MV5BNDUxNzk3ODIyOF5BMl5BanBnXkFtZTgwNjk0NzA4NjM@._V1_Ratio1.5000_AL_.jpg"
        },
        {
          "title": "Elizabeth Lail in You (2018)",
          "image": "https://imdb-api.com/images/original/MV5BOTE5NjMwOTIxOV5BMl5BanBnXkFtZTgwNzk0NzA4NjM@._V1_Ratio1.5000_AL_.jpg"
        },
        {
          "title": "Aya Cash at an event for You (2018)",
          "image": "https://imdb-api.com/images/original/MV5BMGNjZDRmOGYtMTI5NS00ZWQ0LWI5MGYtNGIyMDgwYjZkNGIyXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_Ratio1.0000_AL_.jpg"
        },
        {
          "title": "Penn Badgley at an event for You (2018)",
          "image": "https://imdb-api.com/images/original/MV5BZTJkNmM4MDctZTFiZS00MjJkLWEzYjItY2VhNjVjYTczZWNhXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio1.5000_AL_.jpg"
        },
        {
          "title": "Penn Badgley at an event for You (2018)",
          "image": "https://imdb-api.com/images/original/MV5BZTk3NzhkZWItZWRjZi00YmE0LTk2MTctYWYyNzNjY2I0Y2M1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio1.0000_AL_.jpg"
        },
        {
          "title": "John Stamos and Penn Badgley at an event for You (2018)",
          "image": "https://imdb-api.com/images/original/MV5BOWJlNTg0MzMtMWQ5MC00Y2RhLTlmNWYtMWMxZmJmODE4NWNmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio1.5000_AL_.jpg"
        },
        {
          "title": "Ambyr Childers at an event for You (2018)",
          "image": "https://imdb-api.com/images/original/MV5BMTIwNDBhODEtZmQwZS00ZmEyLTk5MGUtMjVjNDJmODY1YjQ2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio1.0000_AL_.jpg"
        },
        {
          "title": "Ambyr Childers and Jamie McCarthy at an event for You (2018)",
          "image": "https://imdb-api.com/images/original/MV5BZmIzNGMzNTYtZjM0Yy00Zjg5LWE5N2UtY2E2NDRlNjBkMTc5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio1.0000_AL_.jpg"
        },
        {
          "title": "Ambyr Childers at an event for You (2018)",
          "image": "https://imdb-api.com/images/original/MV5BZTg5MDQ0ZDEtMTY1MC00MDQ1LTkyMjUtZmE2Zjk4NGNlMjIyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio1.0000_AL_.jpg"
        },
        {
          "title": "Ambyr Childers and Mike Pont at an event for You (2018)",
          "image": "https://imdb-api.com/images/original/MV5BODkxMGVhYjEtNTk0ZS00NGNiLTliNGMtZjdiNTkzYTMzOGI3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio1.5000_AL_.jpg"
        },
        {
          "title": "Penn Badgley and Victoria Pedretti in You (2018)",
          "image": "https://imdb-api.com/images/original/MV5BMzkzOGFiY2EtZDcyZi00OWNhLThhNmYtYjQ3ODljMTM5ZDBkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio1.0000_AL_.jpg"
        },
        {
          "title": "Penn Badgley, Shay Mitchell, Kathryn Gallagher, Elizabeth Lail, and Nicole Kang in You (2018)",
          "image": "https://imdb-api.com/images/original/MV5BMjM0MDA2NDEzNF5BMl5BanBnXkFtZTgwODYzNjg4NTM@._V1_Ratio1.0000_AL_.jpg"
        },
        {
          "title": "Scott Speedman in You (2018)",
          "image": "https://imdb-api.com/images/original/MV5BNmUyYmIyNzYtODFjMS00ZGQ1LWE4YjAtNzUwYmQ3YjEzMDAxXkEyXkFqcGdeQXVyMTA1NDM5MDg0._V1_Ratio1.5000_AL_.jpg"
        },
        {
          "title": "Penn Badgley in You (2018)",
          "image": "https://imdb-api.com/images/original/MV5BZjJkODhkY2MtMmVmOS00NDE2LWE1NmQtYTJmNTc3YjYxNTA1XkEyXkFqcGdeQXVyMTA1NDM5MDg0._V1_Ratio1.5000_AL_.jpg"
        },
        {
          "title": "Shannon Chan-Kent, Shalita Grant, Victoria Pedretti, and Chris O'Shea in You (2018)",
          "image": "https://imdb-api.com/images/original/MV5BYzNlMTAzY2ItZGM2OC00YjNhLWE3NDItOWRkYjNmNmVjMWY1XkEyXkFqcGdeQXVyMTA1NDM5MDg0._V1_Ratio1.5000_AL_.jpg"
        },
        {
          "title": "Penn Badgley and Tati Gabrielle in You (2018)",
          "image": "https://imdb-api.com/images/original/MV5BODRhMmRjYTMtNmIxNy00NmRlLTgyYWItNGEyNGI2NzUxZTkxXkEyXkFqcGdeQXVyMTA1NDM5MDg0._V1_Ratio1.5000_AL_.jpg"
        },
        {
          "title": "Penn Badgley and Victoria Pedretti in You (2018)",
          "image": "https://imdb-api.com/images/original/MV5BYTc1ZmM3NmYtZmU4Ni00OWJmLTkxYzktYzRhYmYwNjJkMmNiXkEyXkFqcGdeQXVyMTA1NDM5MDg0._V1_Ratio1.5000_AL_.jpg"
        },
        {
          "title": "Penn Badgley and Victoria Pedretti in You (2018)",
          "image": "https://imdb-api.com/images/original/MV5BM2QzZmQ2NjMtNDQ1Zi00MzQwLTg1OTktODM1N2YwNmI0NWFhXkEyXkFqcGdeQXVyMTA1NDM5MDg0._V1_Ratio1.5000_AL_.jpg"
        },
        {
          "title": "Ambyr Childers in You (2018)",
          "image": "https://imdb-api.com/images/original/MV5BYzU0ODhjMWEtYmM2OS00YTQ3LWEyZTYtZmVkYTRjMGYwMzM4XkEyXkFqcGdeQXVyMTE2NzA0Ng@@._V1_Ratio1.3200_AL_.jpg"
        },
        {
          "title": "Victoria Pedretti in You (2018)",
          "image": "https://imdb-api.com/images/original/MV5BNTQ4MjhmNmEtNDUxMC00YjJkLWE1NDAtMmVhNGI2NGFiNWZhXkEyXkFqcGdeQXVyODQ1NzI5NzI@._V1_Ratio1.0000_AL_.jpg"
        },
        {
          "title": "Victoria Pedretti in You (2018)",
          "image": "https://imdb-api.com/images/original/MV5BY2ZiMmNjYzQtNjYyOC00OTFiLWI1YWEtZTNkYmU3ZWM4NTRiXkEyXkFqcGdeQXVyODQ1NzI5NzI@._V1_Ratio1.2400_AL_.jpg"
        },
        {
          "title": "Penn Badgley and Victoria Pedretti in You (2018)",
          "image": "https://imdb-api.com/images/original/MV5BYmI1ZDAzMWMtZGI3ZS00YTc2LWIxNzgtYmQxNzA3MTNiN2U3XkEyXkFqcGdeQXVyODQ1NzI5NzI@._V1_Ratio1.5200_AL_.jpg"
        },
        {
          "title": "Penn Badgley and Victoria Pedretti in You (2018)",
          "image": "https://imdb-api.com/images/original/MV5BMGQzMGJiYmEtMmNiOC00MzU0LWIyZGYtYTI2ZjVkYTU3NzBjXkEyXkFqcGdeQXVyODQ1NzI5NzI@._V1_Ratio1.5200_AL_.jpg"
        },
        {
          "title": "Penn Badgley and Victoria Pedretti in You (2018)",
          "image": "https://imdb-api.com/images/original/MV5BYjc1NDNmM2ItNDkzMy00ZTRkLTkzMDMtZWQzYjIyYjBiM2JlXkEyXkFqcGdeQXVyODQ1NzI5NzI@._V1_Ratio1.3000_AL_.jpg"
        },
        {
          "title": "Penn Badgley and Elizabeth Lail in You (2018)",
          "image": "https://imdb-api.com/images/original/MV5BNTllYTkzMWItNWNkNC00MTExLWJjMzItMTUxZWVhODY2NWE2XkEyXkFqcGdeQXVyODQ1NzI5NzI@._V1_Ratio1.0000_AL_.jpg"
        },
        {
          "title": "Elizabeth Lail in You (2018)",
          "image": "https://imdb-api.com/images/original/MV5BYTZhZTJiNTItNzc1My00Mjg1LTk1MmYtNDQ2MzIwZGI0OWYwXkEyXkFqcGdeQXVyODQ1NzI5NzI@._V1_Ratio2.0000_AL_.jpg"
        },
        {
          "title": "Penn Badgley and Elizabeth Lail in You (2018)",
          "image": "https://imdb-api.com/images/original/MV5BOGZiYjY4NGMtYjIzMi00ZWI0LWJkNjQtNzE4ZTY1MGYxNjJmXkEyXkFqcGdeQXVyODQ1NzI5NzI@._V1_Ratio1.7800_AL_.jpg"
        },
        {
          "title": "Penn Badgley in You (2018)",
          "image": "https://imdb-api.com/images/original/MV5BOTg3NGYxNDctY2MxNS00ODNlLWJiZDYtMDQ1ODJlN2I2OTcyXkEyXkFqcGdeQXVyNjYyNDMwOQ@@._V1_Ratio1.7600_AL_.jpg"
        },
        {
          "title": "James Scully in You (2018)",
          "image": "https://imdb-api.com/images/original/MV5BMzBkZWMyMjYtNDJjYi00Y2Q1LWIwYWYtOWI3Y2JkYTIxMzA2XkEyXkFqcGdeQXVyNjYyNDMwOQ@@._V1_Ratio1.6000_AL_.jpg"
        },
        {
          "title": "Penn Badgley in You (2018)",
          "image": "https://imdb-api.com/images/original/MV5BODBlZWJlYzQtMGU4NC00ZDFiLTk3NzgtODQ1YzY3MGE2MmEzXkEyXkFqcGdeQXVyNjYyNDMwOQ@@._V1_Ratio1.6400_AL_.jpg"
        },
        {
          "title": "Victoria Pedretti and James Scully in You (2018)",
          "image": "https://imdb-api.com/images/original/MV5BMGI1YmVjMWItNTRlNS00NGI0LWE3MzMtZTI4MzY5YjUzZmJlXkEyXkFqcGdeQXVyNjYyNDMwOQ@@._V1_Ratio1.9200_AL_.jpg"
        },
        {
          "title": "Penn Badgley in You (2018)",
          "image": "https://imdb-api.com/images/original/MV5BYjNhZmEwMDYtOGY2My00Yjc2LWFiMDktMmU3YmMwNjEyYjJiXkEyXkFqcGdeQXVyNjYyNDMwOQ@@._V1_Ratio1.7600_AL_.jpg"
        },
        {
          "title": "Jenna Ortega in You (2018)",
          "image": "https://imdb-api.com/images/original/MV5BMTU5ZDFhMWUtZTkyMS00MzFhLWE4OGEtNmJlZGRlYmI1NmZhXkEyXkFqcGdeQXVyNjYyNDMwOQ@@._V1_Ratio1.9200_AL_.jpg"
        },
        {
          "title": "James Scully in You (2018)",
          "image": "https://imdb-api.com/images/original/MV5BMTRlMzRlMjgtZjRjMC00MDU5LWFlNmEtZjY3MmE0NmQ0ZTc4XkEyXkFqcGdeQXVyNjYyNDMwOQ@@._V1_Ratio1.8800_AL_.jpg"
        },
        {
          "title": "Victoria Pedretti and James Scully in You (2018)",
          "image": "https://imdb-api.com/images/original/MV5BNjk0NjFhNzctNTgyZi00YTk5LWFhMmUtNWJjNWI5YTM2NDczXkEyXkFqcGdeQXVyNjYyNDMwOQ@@._V1_Ratio1.7600_AL_.jpg"
        },
        {
          "title": "Jenna Ortega in You (2018)",
          "image": "https://imdb-api.com/images/original/MV5BMDEwOTdkOGYtOGIxZi00OWJiLWE0NGMtMmU4MDJlMjhlMGE4XkEyXkFqcGdeQXVyNjYyNDMwOQ@@._V1_Ratio1.7200_AL_.jpg"
        },
        {
          "title": "Penn Badgley in You (2018)",
          "image": "https://imdb-api.com/images/original/MV5BYjY2NjNhZWEtZGQ4ZC00ZTFmLThhZTctNDcyZTY3YTE3NzRiXkEyXkFqcGdeQXVyNjYyNDMwOQ@@._V1_Ratio1.8200_AL_.jpg"
        },
        {
          "title": "James Scully in You (2018)",
          "image": "https://imdb-api.com/images/original/MV5BZDJkNzNlYWMtNGM3My00MDBkLWFlNzYtYzkxYjMxNzk0YTg4XkEyXkFqcGdeQXVyNjYyNDMwOQ@@._V1_Ratio1.8600_AL_.jpg"
        },
        {
          "title": "Victoria Pedretti in You (2018)",
          "image": "https://imdb-api.com/images/original/MV5BMjMxOGUyOTItOTczMS00NjMyLTlhNGYtYWFhN2Y2ZGZlNDhmXkEyXkFqcGdeQXVyNjYyNDMwOQ@@._V1_Ratio1.8400_AL_.jpg"
        },
        {
          "title": "Penn Badgley and Victoria Pedretti in You (2018)",
          "image": "https://imdb-api.com/images/original/MV5BZDA2MmFlZDUtNTg0YS00ZTY2LTkzN2ItZmQ4MWYzZjMyOWI3XkEyXkFqcGdeQXVyNjYyNDMwOQ@@._V1_Ratio1.7000_AL_.jpg"
        },
        {
          "title": "Penn Badgley in You (2018)",
          "image": "https://imdb-api.com/images/original/MV5BZGE4NzlhZmYtMGM0YS00YzZjLWJjMmQtZGVjYTQ0YjMwNDgyXkEyXkFqcGdeQXVyNjYyNDMwOQ@@._V1_Ratio1.9400_AL_.jpg"
        }
      ],
      "errorMessage": ""
    },
    "trailer": {
      "imDbId": "tt7335184",
      "title": "You",
      "fullTitle": "You (TV Series 2018– )",
      "type": "TVSeries",
      "year": "2018",
      "videoId": "vi152878873",
      "videoTitle": "Season 2 Trailer",
      "videoDescription": "Meet Will Bettelheim. He's not your regular Joe. He's new to LA and has sworn off love. But love, like murder, has a way of tracking you down.",
      "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMmM3MzkyNGItZWE0ZC00MzJhLTgxODItYTRhOTFlOTJmYzA4XkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg",
      "uploadDate": "12/16/2019 16:59:12",
      "link": "https://www.imdb.com/video/vi152878873",
      "linkEmbed": "https://www.imdb.com/video/imdb/vi152878873/imdb/embed",
      "errorMessage": ""
    },
    "boxOffice": {
      "budget": "",
      "openingWeekendUSA": "",
      "grossUSA": "",
      "cumulativeWorldwideGross": ""
    },
    "tagline": "Meet your match",
    "keywords": "bookstore,obsessive love,stalker,new york,psychological thriller",
    "keywordList": [
      "bookstore",
      "obsessive love",
      "stalker",
      "new york",
      "psychological thriller"
    ],
    "similars": [
      {
        "id": "tt7767422",
        "title": "Sex Education",
        "fullTitle": "Sex Education (TV Series 2019)",
        "year": "TV Series 2019",
        "image": "https://imdb-api.com/images/original/MV5BZjgyMzFiMDgtNWNmMS00ZDEyLTkzYzgtMjMzZjk4YjhjZWUxXkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_Ratio0.8000_AL_.jpg",
        "plot": "A teenage boy with a sex therapist mother teams up with a high school classmate to set up an underground sex therapy clinic at school.",
        "directors": "",
        "stars": "Asa Butterfield, Gillian Anderson, Ncuti Gatwa",
        "genres": "Comedy, Drama",
        "imDbRating": "8.3"
      },
      {
        "id": "tt6257970",
        "title": "The End of the F***ing World",
        "fullTitle": "The End of the F***ing World (2017–2019)",
        "year": "2017–2019",
        "image": "https://imdb-api.com/images/original/MV5BN2ZhNmQ2MjQtMmQzMi00YjE5LTlkMWMtMjk5YzIxMjk2NDc2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.8000_AL_.jpg",
        "plot": "James is 17 and is pretty sure he is a psychopath. Alyssa, also 17, is the cool and moody new girl at school. The pair make a connection and she persuades him to embark on a road trip in search of her real father.",
        "directors": "",
        "stars": "Jessica Barden, Alex Lawther, Steve Oram",
        "genres": "Adventure, Comedy, Crime",
        "imDbRating": "8.1"
      },
      {
        "id": "tt7134908",
        "title": "Elite",
        "fullTitle": "Elite (TV Series 2018)",
        "year": "TV Series 2018",
        "image": "https://imdb-api.com/images/original/MV5BYWJhMWMyZmUtNTc3Mi00MTYzLTllMjMtNzFkM2ZhYTg2ZWFiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.6737_AL_.jpg",
        "plot": "When three working-class teenagers begin attending an exclusive private school in Spain, the clash between them and the wealthy students leads to murder.",
        "directors": "",
        "stars": "Miguel Bernardeau, Arón Piper, Itzan Escamilla",
        "genres": "Crime, Drama, Thriller",
        "imDbRating": "7.6"
      },
      {
        "id": "tt1837492",
        "title": "13 Reasons Why",
        "fullTitle": "13 Reasons Why (2017–2020)",
        "year": "2017–2020",
        "image": "https://imdb-api.com/images/original/MV5BMDYzZTRlNGEtZDc2Mi00ZGNjLTlmZDAtMmVjMDZkOThiODEwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.6737_AL_.jpg",
        "plot": "Follows teenager Clay Jensen, in his quest to uncover the story behind his classmate and crush, Hannah, and her decision to end her life.",
        "directors": "",
        "stars": "Dylan Minnette, Katherine Langford, Christian Navarro",
        "genres": "Drama, Mystery, Thriller",
        "imDbRating": "7.6"
      },
      {
        "id": "tt6763664",
        "title": "The Haunting of Hill House",
        "fullTitle": "The Haunting of Hill House (2018)",
        "year": "2018",
        "image": "https://imdb-api.com/images/original/MV5BMTU4NzA4MDEwNF5BMl5BanBnXkFtZTgwMTQxODYzNjM@._V1_Ratio0.6737_AL_.jpg",
        "plot": "Flashing between past and present, a fractured family confronts haunting memories of their old home and the terrifying events that drove them from it.",
        "directors": "",
        "stars": "Michiel Huisman, Carla Gugino, Henry Thomas",
        "genres": "Drama, Horror, Mystery",
        "imDbRating": "8.6"
      },
      {
        "id": "tt0397442",
        "title": "Gossip Girl",
        "fullTitle": "Gossip Girl (2007–2012)",
        "year": "2007–2012",
        "image": "https://imdb-api.com/images/original/MV5BNmQ4Zjg1YWYtMTA1Mi00ZGY1LTlmN2ItYTc5ODkzNTFmYWVhXkEyXkFqcGdeQXVyNjQ0OTk1ODg@._V1_Ratio0.7789_AL_.jpg",
        "plot": "Privileged teens living on the Upper East Side of New York can hide no secret from the ruthless blogger who is always watching.",
        "directors": "",
        "stars": "Blake Lively, Leighton Meester, Penn Badgley",
        "genres": "Drama, Romance",
        "imDbRating": "7.4"
      },
      {
        "id": "tt8064302",
        "title": "Dead to Me",
        "fullTitle": "Dead to Me (TV Series 2019)",
        "year": "TV Series 2019",
        "image": "https://imdb-api.com/images/original/MV5BNTcyOTA3ZWUtOWEwMy00YjI5LWIyNjctNTAyYjI5ZmE0NGI4XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.6737_AL_.jpg",
        "plot": "A series about a powerful friendship that blossoms between a tightly wound widow and a free spirit with a shocking secret.",
        "directors": "",
        "stars": "Christina Applegate, Linda Cardellini, Sam McCarthy",
        "genres": "Comedy, Drama",
        "imDbRating": "8"
      },
      {
        "id": "tt9446688",
        "title": "I Am Not Okay with This",
        "fullTitle": "I Am Not Okay with This (2020)",
        "year": "2020",
        "image": "https://imdb-api.com/images/original/MV5BMWM5YzhmNGMtZTI4Ny00MGM4LThkYjAtMDIyMTEwNTQyZmQ1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.6737_AL_.jpg",
        "plot": "Sydney is a teenage girl navigating the trials and tribulations of high school while dealing with the complexities of her family, her budding sexuality, and mysterious superpowers just beginning to awaken deep within her.",
        "directors": "",
        "stars": "Sophia Lillis, Wyatt Oleff, Sofia Bryant",
        "genres": "Comedy, Sci-Fi",
        "imDbRating": "7.6"
      },
      {
        "id": "tt10970552",
        "title": "The Haunting of Bly Manor",
        "fullTitle": "The Haunting of Bly Manor (2020)",
        "year": "2020",
        "image": "https://imdb-api.com/images/original/MV5BZGJkMDRiOWUtZTMzZC00YzYzLWI1NDAtODc4ZGFiN2Q2MmJlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.8000_AL_.jpg",
        "plot": "After an au pair’s tragic death, Henry hires a young American nanny to care for his orphaned niece and nephew who reside at Bly Manor with the chef Owen, groundskeeper Jamie and housekeeper, Mrs. Grose.",
        "directors": "",
        "stars": "Victoria Pedretti, Oliver Jackson-Cohen, Amelia Eve",
        "genres": "Drama, Horror, Mystery",
        "imDbRating": "7.4"
      },
      {
        "id": "tt6315640",
        "title": "Atypical",
        "fullTitle": "Atypical (2017–2021)",
        "year": "2017–2021",
        "image": "https://imdb-api.com/images/original/MV5BYjg1ZmQ0ZDktMjNhZS00MDJjLTllZTItMmIyYTBkYjM2MzQzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.6737_AL_.jpg",
        "plot": "Sam, an 18-year-old on the autism spectrum, decides it's time to find a girlfriend, a journey that sets Sam's mom on her own life-changing path as her son seeks more independence.",
        "directors": "",
        "stars": "Jennifer Jason Leigh, Keir Gilchrist, Brigette Lundy-Paine",
        "genres": "Comedy, Drama",
        "imDbRating": "8.3"
      },
      {
        "id": "tt6468322",
        "title": "Money Heist",
        "fullTitle": "Money Heist (TV Series 2017)",
        "year": "TV Series 2017",
        "image": "https://imdb-api.com/images/original/MV5BZDcxOGI0MDYtNTc5NS00NDUzLWFkOTItNDIxZjI0OTllNTljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.6737_AL_.jpg",
        "plot": "An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.",
        "directors": "",
        "stars": "Úrsula Corberó, Álvaro Morte, Itziar Ituño",
        "genres": "Action, Crime, Mystery",
        "imDbRating": "8.3"
      },
      {
        "id": "tt4574334",
        "title": "Stranger Things",
        "fullTitle": "Stranger Things (TV Series 2016)",
        "year": "TV Series 2016",
        "image": "https://imdb-api.com/images/original/MV5BMjEzMDAxOTUyMV5BMl5BanBnXkFtZTgwNzAxMzYzOTE@._V1_Ratio0.6737_AL_.jpg",
        "plot": "When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.",
        "directors": "",
        "stars": "Millie Bobby Brown, Finn Wolfhard, Winona Ryder",
        "genres": "Drama, Fantasy, Horror",
        "imDbRating": "8.7"
      }
    ],
    "tvSeriesInfo": {
      "yearEnd": "",
      "creators": "Sera Gamble, Greg Berlanti",
      "creatorList": [
        {
          "id": "nm1571148",
          "name": "Sera Gamble"
        },
        {
          "id": "nm0075528",
          "name": "Greg Berlanti"
        }
      ],
      "seasons": [
        "1",
        "2"
      ]
    },
    "tvEpisodeInfo": null,
    "errorMessage": ""
  }
]
</script>

<style lang="scss">
@import "../../main.scss";

.main-section {
  min-height: calc(80vh - 75px);
  max-width: 100%;
}
</style>
