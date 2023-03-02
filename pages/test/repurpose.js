import Head from "next/head";

import { checkIfURL } from "../../lib/helpers";
import Page from "../../layouts/page";

import { Button } from "../../components/Button";
import { useEffect, useState, useRef } from "react";
// import ContentBlock from "../components/website/ContentBlock";
// import H2 from "../components/website/H2";
// import H3 from "../components/website/H3";
// import P from "../components/website/P";

const mockData = {
  title: "Monday motivation",
  summary:
    "We often think our limits are fixed and can't be changed, but if we consistently push ourselves and challenge our assumptions, we can find out that there is no real limit to what we can do.",
  twitter:
    '"Question everything, push yourself and never underestimate what you can do! Your limits are yours to create - no boundaries can hold you when you\'re determined to succeed!" #limitless #PositiveThinking #InspiringChange #Goals',
  linkedin:
    "Are you feeling limited by what you can do? Don't be! Push yourself and challenge those assumptions--it turns out there's no real limit to the success you can achieve through hard work and dedication. #NoLimits #ChallengeYourLimits #DreamBig",
  version: "2",
};

export default function Repurpose() {
  //   const [isFormValid, setIsFormValid] = useState(false);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const BODY_URL =
    "https://medium.com/@Schwarzenegger/monday-motivation-1-30-8643ea0a1695";
  const API_URL =
    "https://wyelsbzvsg74mcawahbvgylnem0eghht.lambda-url.eu-central-1.on.aws/";
  const OPEN_AI_KEY = "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";
  const refQuery = useRef(null);

  //   useEffect(() => {
  //     return () => {
  //       setTimeout(() => {
  //         setData(mockData);
  //         setIsLoading(false);
  //       }, 2000);
  //     };
  //   }, []);

  useEffect(() => {
    setIsLoading(false);
    if (!data) return;
    console.log("📠", data);
  }, [data]);

  //   useEffect(() => {
  //     console.log("refQuery", refQuery);
  //     if (refQuery.current.value !== null) return;
  //     setIsFormValid(true);
  //     console.log(isFormValid);
  //   }, [refQuery]);

  function handleSubmit(event) {
    event.preventDefault();
    if (refQuery.current.value == "") return;
    // console.log("✅ Form submitted");
    // console.log(refQuery.current.value);
    // postQuery(refQuery.current.value)
    // fetch("/api/call", {
    // fetch("/api/call", {
    const d = {
      url: BODY_URL,
      platforms: ["twitter", "linkedin"],
      verbose: true,
      api_key_openai: OPEN_AI_KEY,
    };

    postQuery();

    // fetch("/api/call", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(d),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     // setData(data);
    //     // setLoading(false);
    //   });
  }

  //   useEffect(() => {
  // setLoading(true);
  function postQuery(url) {
    setTimeout(() => {
      setData(mockData);
      setIsLoading(false);
    }, 2000);
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => {
    // setData(data);
    // setLoading(false);
    //   });
  }
  //   }, []);

  if (isLoading)
    return (
      <Page className="bg-gray-100">
        <p>Loading...</p>
      </Page>
    );
  //   if (!data) return <p>No profile data</p>;

  return (
    <>
      <Head>
        <title>contentradar.ai</title>
        <meta name="robots" content="noindex" />
        <meta
          name="description"
          content="The AI-powered workspace for content creation"
        />
        <link
          href="favicon-light.png"
          rel="icon"
          media="(prefers-color-scheme: light)"
        />
        <link
          href="favicon-dark.png"
          rel="icon"
          media="(prefers-color-scheme: dark)"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <Page className="bg-gray-100">
        <h1 className="text-3xl font-bold mb-12">Repurpose</h1>

        <form onSubmit={handleSubmit}>
          <div className="">
            <label htmlFor="query">You URL or text</label>
            <input type="text" id="query" name="query" ref={refQuery} />
          </div>
          <Button type="submit">Submit</Button>
        </form>
        {/* <pre className="mt-12 px-4 py-3 bg-gray-700 text-white rounded-md">
          isFormValid: {isFormValid ? "true" : "false"}
        </pre> */}
      </Page>
    </>
  );
}

// curl -X POST \
// 'https://wyelsbzvsg74mcawahbvgylnem0eghht.lambda-url.eu-central-1.on.aws/' \
//        -H 'Content-Type: application/json' \
//        -d '{ "input_text": "Everything You Need to Know About Tofu: What It Is, How to Cook It, and Its Health Benefits: Tofu, also known as bean curd, is a versatile and nutritious plant-based protein that has been enjoyed for centuries in many parts of the world, particularly in East Asia. It is made from soybeans, which are soaked, ground, and then mixed with a coagulant to form a soft, spongy block. Tofu is a staple in many vegan and vegetarian diets, and is known for its versatility and ability to absorb flavors. One of the key benefits of tofu is its high protein content. A 4-ounce serving of tofu contains around 10 grams of protein, making it an excellent source of this essential nutrient. Tofu is also a good source of iron, calcium, and a variety of other minerals, as well as certain plant compounds that have been linked to various health benefits. Some research suggests that consuming soy products, including tofu, may help to lower the risk of certain chronic diseases, such as heart disease and certain types of cancer. Tofu is available in a variety of textures, including silken, firm, and extra-firm, which can be used in different types of dishes. Silken tofu is soft and smooth, and is often used in soups, sauces, and desserts. Firm and extra-firm tofu have a firmer, more toothsome texture, and are well-suited for grilling, frying, and stir-frying. To cook tofu, it is important to press out any excess moisture before cooking to help it absorb flavors and achieve a desirable texture. Tofu can be marinated, grilled, stir-fried, or used in soups, stews, and other dishes. It is also available in a variety of pre-flavored options, such as teriyaki or spicy, which can be a convenient and flavorful option. In conclusion, tofu is a nutritious and versatile plant-based protein that can be enjoyed as part of a healthy diet. Whether you are a vegan or vegetarian, or simply looking to add more plant-based protein to your diet, tofu is a tasty and convenient option that is worth exploring.","platforms": [ "twitter", "linkedin" ], "verbose": true, "api_key_openai": "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" }'
