export const props = {
  title: "صفحه نخست",
  latestComments: [
    {
      __typename: "Comment",
      content:
        "<p>متن بلند برای تست کامنت<br />\nورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و </p>\n",
      id: "Y29tbWVudDo1",
      parentId: "Y29tbWVudDoy",
      parent: {
        __typename: "CommentToParentCommentConnectionEdge",
        node: {
          __typename: "Comment",
          date: "2023-03-28 17:47:37",
          author: {
            __typename: "CommentToCommenterConnectionEdge",
            node: {
              __typename: "User",
              name: "moradi",
              avatar: {
                __typename: "Avatar",
                url: "http://localhost:10005/wp-content/uploads/2023/03/moradi_avatar-96x96.jpg",
              },
            },
          },
        },
      },
    },
    {
      __typename: "Comment",
      content: "<p>سلام یله</p>\n",
      id: "Y29tbWVudDo0",
      parentId: "Y29tbWVudDoz",
      parent: {
        __typename: "CommentToParentCommentConnectionEdge",
        node: {
          __typename: "Comment",
          date: "2023-03-28 17:47:55",
          author: {
            __typename: "CommentToCommenterConnectionEdge",
            node: {
              __typename: "User",
              name: "moradi",
              avatar: {
                __typename: "Avatar",
                url: "http://localhost:10005/wp-content/uploads/2023/03/moradi_avatar-96x96.jpg",
              },
            },
          },
        },
      },
    },
    {
      __typename: "Comment",
      content:
        "<p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد</p>\n",
      id: "Y29tbWVudDoz",
      parentId: null,
      parent: null,
    },
    {
      __typename: "Comment",
      content:
        "<p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>\n",
      id: "Y29tbWVudDoy",
      parentId: null,
      parent: null,
    },
  ],
  logo: "http://localhost:10005/wp-content/uploads/2023/03/DentinoLogo.png",
  featuredImage: null,
  mainMenuItems: [
    {
      id: "c32fe8e1-f37a-4bbd-b2cf-0047d1ec1877",
      destination: "/",
      label: "خانه نخست",
      subMenuItems: [],
    },
    {
      id: "28761ca6-5750-401f-95e4-c3bd22e25e80",
      destination: null,
      label: "صفحات",
      subMenuItems: [
        {
          id: "a0c8b721-f910-41ff-bc95-662fe7df97df",
          destination: "/404-2/",
          label: "404",
        },
        {
          id: "ad80e0c6-2e33-49e4-a685-9729c1fa1eaa",
          destination: "/500-2/",
          label: "500",
        },
        {
          id: "8be87949-b6ae-4381-ac96-d96ed9d1c555",
          destination: "/%d8%b3%d8%b1%d9%88%db%8c%d8%b3-%d9%87%d8%a7/",
          label: "سرویس",
        },
        {
          id: "b8b37a12-7d77-47fa-9f73-2905581c4391",
          destination:
            "/%d8%ac%d8%b2%d8%a6%db%8c%d8%a7%d8%aa-%d8%b3%d8%b1%d9%88%db%8c%d8%b3/",
          label: "حزئیات سرویس",
        },
        {
          id: "b9bac041-e7a2-465a-b385-571d305fa545",
          destination:
            "/%d8%ac%d8%b2%d8%a6%db%8c%d8%a7%d8%aa-%d8%a8%d9%84%d8%a7%da%af/",
          label: "وبلاگ",
        },
      ],
    },
    {
      id: "e9a9facf-4b5a-41a4-8b6a-5f27d81839b7",
      destination: "/%d8%af%d8%b1%d8%a8%d8%a7%d8%b1%d9%87-%d9%85%d8%a7/",
      label: "درباره ما",
      subMenuItems: [],
    },
    {
      id: "a177a176-d3f3-4c03-894f-99b500a75234",
      destination: "/%d8%aa%d9%85%d8%a7%d8%b3-%d8%a8%d8%a7-%d9%85%d8%a7/",
      label: "تماس با ما",
      subMenuItems: [],
    },
  ],
  footer: {
    __typename: "HCMSFooter",
    sidebarOne:
      '<div class="widget widget_block widget_text"><div class="widget-content">\n<p class="has-text-align-right">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته</p>\n</div></div><div class="widget widget_block"><div class="widget-content">\n<ul class="wp-block-social-links is-layout-flex"><li class="wp-social-link wp-social-link-instagram wp-block-social-link"><a href="https://google.com" class="wp-block-social-link-anchor"><svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M12,4.622c2.403,0,2.688,0.009,3.637,0.052c0.877,0.04,1.354,0.187,1.671,0.31c0.42,0.163,0.72,0.358,1.035,0.673 c0.315,0.315,0.51,0.615,0.673,1.035c0.123,0.317,0.27,0.794,0.31,1.671c0.043,0.949,0.052,1.234,0.052,3.637 s-0.009,2.688-0.052,3.637c-0.04,0.877-0.187,1.354-0.31,1.671c-0.163,0.42-0.358,0.72-0.673,1.035 c-0.315,0.315-0.615,0.51-1.035,0.673c-0.317,0.123-0.794,0.27-1.671,0.31c-0.949,0.043-1.233,0.052-3.637,0.052 s-2.688-0.009-3.637-0.052c-0.877-0.04-1.354-0.187-1.671-0.31c-0.42-0.163-0.72-0.358-1.035-0.673 c-0.315-0.315-0.51-0.615-0.673-1.035c-0.123-0.317-0.27-0.794-0.31-1.671C4.631,14.688,4.622,14.403,4.622,12 s0.009-2.688,0.052-3.637c0.04-0.877,0.187-1.354,0.31-1.671c0.163-0.42,0.358-0.72,0.673-1.035 c0.315-0.315,0.615-0.51,1.035-0.673c0.317-0.123,0.794-0.27,1.671-0.31C9.312,4.631,9.597,4.622,12,4.622 M12,3 C9.556,3,9.249,3.01,8.289,3.054C7.331,3.098,6.677,3.25,6.105,3.472C5.513,3.702,5.011,4.01,4.511,4.511 c-0.5,0.5-0.808,1.002-1.038,1.594C3.25,6.677,3.098,7.331,3.054,8.289C3.01,9.249,3,9.556,3,12c0,2.444,0.01,2.751,0.054,3.711 c0.044,0.958,0.196,1.612,0.418,2.185c0.23,0.592,0.538,1.094,1.038,1.594c0.5,0.5,1.002,0.808,1.594,1.038 c0.572,0.222,1.227,0.375,2.185,0.418C9.249,20.99,9.556,21,12,21s2.751-0.01,3.711-0.054c0.958-0.044,1.612-0.196,2.185-0.418 c0.592-0.23,1.094-0.538,1.594-1.038c0.5-0.5,0.808-1.002,1.038-1.594c0.222-0.572,0.375-1.227,0.418-2.185 C20.99,14.751,21,14.444,21,12s-0.01-2.751-0.054-3.711c-0.044-0.958-0.196-1.612-0.418-2.185c-0.23-0.592-0.538-1.094-1.038-1.594 c-0.5-0.5-1.002-0.808-1.594-1.038c-0.572-0.222-1.227-0.375-2.185-0.418C14.751,3.01,14.444,3,12,3L12,3z M12,7.378 c-2.552,0-4.622,2.069-4.622,4.622S9.448,16.622,12,16.622s4.622-2.069,4.622-4.622S14.552,7.378,12,7.378z M12,15 c-1.657,0-3-1.343-3-3s1.343-3,3-3s3,1.343,3,3S13.657,15,12,15z M16.804,6.116c-0.596,0-1.08,0.484-1.08,1.08 s0.484,1.08,1.08,1.08c0.596,0,1.08-0.484,1.08-1.08S17.401,6.116,16.804,6.116z"></path></svg><span class="wp-block-social-link-label screen-reader-text">اینستاگرام</span></a></li>\n\n<li class="wp-social-link wp-social-link-telegram wp-block-social-link"><a href="https://google.com" class="wp-block-social-link-anchor"><svg width="24" height="24" viewBox="0 0 128 128" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M28.9700376,63.3244248 C47.6273373,55.1957357 60.0684594,49.8368063 66.2934036,47.2476366 C84.0668845,39.855031 87.7600616,38.5708563 90.1672227,38.528 C90.6966555,38.5191258 91.8804274,38.6503351 92.6472251,39.2725385 C93.294694,39.7979149 93.4728387,40.5076237 93.5580865,41.0057381 C93.6433345,41.5038525 93.7494885,42.63857 93.6651041,43.5252052 C92.7019529,53.6451182 88.5344133,78.2034783 86.4142057,89.5379542 C85.5170662,94.3339958 83.750571,95.9420841 82.0403991,96.0994568 C78.3237996,96.4414641 75.5015827,93.6432685 71.9018743,91.2836143 C66.2690414,87.5912212 63.0868492,85.2926952 57.6192095,81.6896017 C51.3004058,77.5256038 55.3966232,75.2369981 58.9976911,71.4967761 C59.9401076,70.5179421 76.3155302,55.6232293 76.6324771,54.2720454 C76.6721165,54.1030573 76.7089039,53.4731496 76.3346867,53.1405352 C75.9604695,52.8079208 75.4081573,52.921662 75.0095933,53.0121213 C74.444641,53.1403447 65.4461175,59.0880351 48.0140228,70.8551922 C45.4598218,72.6091037 43.1463059,73.4636682 41.0734751,73.4188859 C38.7883453,73.3695169 34.3926725,72.1268388 31.1249416,71.0646282 C27.1169366,69.7617838 23.931454,69.0729605 24.208838,66.8603276 C24.3533167,65.7078514 25.9403832,64.5292172 28.9700376,63.3244248 Z" /></svg><span class="wp-block-social-link-label screen-reader-text">Telegram</span></a></li>\n\n<li class="wp-social-link wp-social-link-whatsapp wp-block-social-link"><a href="https://google.com" class="wp-block-social-link-anchor"><svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M 12.011719 2 C 6.5057187 2 2.0234844 6.478375 2.0214844 11.984375 C 2.0204844 13.744375 2.4814687 15.462563 3.3554688 16.976562 L 2 22 L 7.2324219 20.763672 C 8.6914219 21.559672 10.333859 21.977516 12.005859 21.978516 L 12.009766 21.978516 C 17.514766 21.978516 21.995047 17.499141 21.998047 11.994141 C 22.000047 9.3251406 20.962172 6.8157344 19.076172 4.9277344 C 17.190172 3.0407344 14.683719 2.001 12.011719 2 z M 12.009766 4 C 14.145766 4.001 16.153109 4.8337969 17.662109 6.3417969 C 19.171109 7.8517969 20.000047 9.8581875 19.998047 11.992188 C 19.996047 16.396187 16.413812 19.978516 12.007812 19.978516 C 10.674812 19.977516 9.3544062 19.642812 8.1914062 19.007812 L 7.5175781 18.640625 L 6.7734375 18.816406 L 4.8046875 19.28125 L 5.2851562 17.496094 L 5.5019531 16.695312 L 5.0878906 15.976562 C 4.3898906 14.768562 4.0204844 13.387375 4.0214844 11.984375 C 4.0234844 7.582375 7.6067656 4 12.009766 4 z M 8.4765625 7.375 C 8.3095625 7.375 8.0395469 7.4375 7.8105469 7.6875 C 7.5815469 7.9365 6.9355469 8.5395781 6.9355469 9.7675781 C 6.9355469 10.995578 7.8300781 12.182609 7.9550781 12.349609 C 8.0790781 12.515609 9.68175 15.115234 12.21875 16.115234 C 14.32675 16.946234 14.754891 16.782234 15.212891 16.740234 C 15.670891 16.699234 16.690438 16.137687 16.898438 15.554688 C 17.106437 14.971687 17.106922 14.470187 17.044922 14.367188 C 16.982922 14.263188 16.816406 14.201172 16.566406 14.076172 C 16.317406 13.951172 15.090328 13.348625 14.861328 13.265625 C 14.632328 13.182625 14.464828 13.140625 14.298828 13.390625 C 14.132828 13.640625 13.655766 14.201187 13.509766 14.367188 C 13.363766 14.534188 13.21875 14.556641 12.96875 14.431641 C 12.71875 14.305641 11.914938 14.041406 10.960938 13.191406 C 10.218937 12.530406 9.7182656 11.714844 9.5722656 11.464844 C 9.4272656 11.215844 9.5585938 11.079078 9.6835938 10.955078 C 9.7955938 10.843078 9.9316406 10.663578 10.056641 10.517578 C 10.180641 10.371578 10.223641 10.267562 10.306641 10.101562 C 10.389641 9.9355625 10.347156 9.7890625 10.285156 9.6640625 C 10.223156 9.5390625 9.737625 8.3065 9.515625 7.8125 C 9.328625 7.3975 9.131125 7.3878594 8.953125 7.3808594 C 8.808125 7.3748594 8.6425625 7.375 8.4765625 7.375 z"></path></svg><span class="wp-block-social-link-label screen-reader-text">WhatsApp</span></a></li>\n\n<li class="wp-social-link wp-social-link-mail wp-block-social-link"><a href="http://google.com" class="wp-block-social-link-anchor"><svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M20,4H4C2.895,4,2,4.895,2,6v12c0,1.105,0.895,2,2,2h16c1.105,0,2-0.895,2-2V6C22,4.895,21.105,4,20,4z M20,8.236l-8,4.882 L4,8.236V6h16V8.236z"></path></svg><span class="wp-block-social-link-label screen-reader-text">Mail</span></a></li></ul>\n</div></div>',
    sidebarTwo:
      '<div class="widget widget_block"><div class="widget-content">\n<h2 class="wp-block-heading has-text-align-right">بخش های سایت</h2>\n</div></div><div class="widget widget_block widget_text"><div class="widget-content">\n<p class="has-text-align-right">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته</p>\n</div></div><div class="widget widget_block"><div class="widget-content">\n<div class="wp-block-columns is-layout-flex wp-container-4">\n<div class="wp-block-column is-layout-flow">\n<ul>\n<li>سوالات متداول</li>\n\n\n\n<li>گالری</li>\n\n\n\n<li></li>\n</ul>\n</div>\n\n\n\n<div class="wp-block-column is-layout-flow">\n<ul>\n<li><a href="http://localhost:10005/%d8%aa%d9%85%d8%a7%d8%b3-%d8%a8%d8%a7-%d9%85%d8%a7/" data-type="page" data-id="140">تماس با ما</a></li>\n\n\n\n<li><a href="http://localhost:10005/%d8%af%d8%b1%d8%a8%d8%a7%d8%b1%d9%87-%d9%85%d8%a7/" data-type="page" data-id="124">درباره ما</a></li>\n</ul>\n</div>\n</div>\n</div></div>',
    copyrightText: "تمام حقوق محفوظ است",
    socialLinks: [],
  },
  callToActionLabel: "Get in touch",
  callToActionDestination: null,
  blocks: [
    {
      innerBlocks: [
        {
          name: "core/paragraph",
          attributes: {
            content: "",
            dropCap: false,
            anchor: "",
            align: "center",
            placeholder: "Write title…",
            fontSize: "large",
          },
          id: "aeb04ec0-08b5-4657-9084-aea7670f3530",
        },
        {
          innerBlocks: [
            {
              innerBlocks: [
                {
                  name: "core/heading",
                  attributes: {
                    content: "پزشک پیدا کنید و آنلاین رزرو کنید",
                    level: 2,
                    anchor: "",
                    textAlign: "right",
                    textColor: "primary",
                  },
                  id: "fb072223-88bf-4f36-ba03-4a86ca5769db",
                },
                {
                  name: "core/paragraph",
                  attributes: {
                    content:
                      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.",
                    dropCap: false,
                    anchor: "",
                    align: "right",
                  },
                  id: "8d034965-2ea4-4620-bddd-87e26ad363c1",
                },
                {
                  name: "acf/ctabutton",
                  attributes: {
                    name: "acf/ctabutton",
                    data: {
                      label: "رزور کنید",
                      _label: "field_64198956982eb",
                      destination: 140,
                      _destination: "field_6419896d982ec",
                      align: "right",
                      _align: "field_64198996982ed",
                    },
                    mode: "preview",
                  },
                  id: "7876dac4-0244-4b01-a515-3ccad3f45932",
                },
                {
                  name: "acf/featurebox",
                  attributes: {
                    name: "acf/featurebox",
                    data: {
                      title: "ساعت کاری مطلب",
                      _title: "field_641dd32633753",
                      description: "شنبه 15 تا 18",
                      _description: "field_641dd3b233755",
                      sub_description: "یک شنبه 9 تا 12",
                      _sub_description: "field_641dd3d733756",
                      destination: {
                        title: "تماس با ما",
                        url: "http://localhost:10005/%d8%aa%d9%85%d8%a7%d8%b3-%d8%a8%d8%a7-%d9%85%d8%a7/",
                        target: "",
                      },
                      _destination: "field_641dd37933754",
                    },
                    mode: "preview",
                  },
                  id: "a5925cb3-9e68-4f72-9582-814608f78b1f",
                },
              ],
              name: "core/column",
              attributes: {
                anchor: "",
              },
              id: "bf09c721-056b-4dd4-8b1d-cc7f1a9f9ec5",
            },
            {
              innerBlocks: [
                {
                  name: "core/image",
                  attributes: {
                    url: "http://localhost:10005/wp-content/uploads/2023/04/Photo6.png",
                    alt: "شسی",
                    caption: "",
                    title: "",
                    href: "",
                    rel: "",
                    linkClass: "",
                    linkTarget: "",
                    anchor: "",
                    id: 374,
                    sizeSlug: "full",
                    linkDestination: "none",
                    orginalHeight: 809,
                    orginalWidth: 656,
                  },
                  id: "ca150611-6f7e-40a1-abdb-b33659eefaa6",
                },
              ],
              name: "core/column",
              attributes: {
                anchor: "",
              },
              id: "57089db1-5451-4972-9307-5da7a8cbbc60",
            },
          ],
          name: "core/columns",
          attributes: {
            isStackedOnMobile: true,
            anchor: "",
          },
          id: "69758abe-02d0-4067-9c42-bca7a8c20557",
        },
      ],
      name: "core/cover",
      attributes: {
        useFeaturedImage: false,
        alt: "",
        hasParallax: false,
        isRepeated: false,
        dimRatio: 50,
        backgroundType: "image",
        isDark: false,
        tagName: "div",
        anchor: "",
        url: "http://localhost:10005/wp-content/uploads/2023/03/backgroundCover.png",
        id: 148,
      },
      id: "bc5940c6-9f07-48ce-bdef-c254f09455b6",
    },
    {
      innerBlocks: [
        {
          innerBlocks: [
            {
              name: "core/heading",
              attributes: {
                content: "کلینیک حرفه ای دنتینو",
                level: 2,
                anchor: "",
                textAlign: "center",
              },
              id: "2f774574-7a8b-4276-90de-b55204710f55",
            },
          ],
          name: "core/group",
          attributes: {
            tagName: "div",
            anchor: "",
            ariaLabel: "",
            layout: {
              type: "constrained",
            },
          },
          id: "cf2bfc0c-dbc9-478a-bb6f-dc6ae75d8097",
        },
        {
          innerBlocks: [
            {
              innerBlocks: [
                {
                  name: "core/heading",
                  attributes: {
                    content:
                      "مراقبت از <strong>سلامتی</strong> از همه مهمتر است",
                    level: 4,
                    anchor: "",
                    textAlign: "right",
                  },
                  id: "ff9aad8a-8be9-4e9e-91e1-c4e906dd0e40",
                },
                {
                  name: "core/paragraph",
                  attributes: {
                    content:
                      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
                    dropCap: false,
                    anchor: "",
                    align: "right",
                  },
                  id: "0cba66f2-d0f4-48d4-b473-583266da07db",
                },
              ],
              name: "core/column",
              attributes: {
                anchor: "",
              },
              id: "962b18f0-643d-4f5c-84a1-01dc8dab2643",
            },
            {
              innerBlocks: [
                {
                  name: "core/image",
                  attributes: {
                    url: "http://localhost:10005/wp-content/uploads/2023/04/Img-1.png",
                    alt: "",
                    caption: "",
                    title: "",
                    href: "",
                    rel: "",
                    linkClass: "",
                    linkTarget: "",
                    anchor: "",
                    id: 376,
                    sizeSlug: "full",
                    linkDestination: "none",
                    orginalHeight: 940,
                    orginalWidth: 945,
                  },
                  id: "cfb9a3bf-29f7-447d-9c37-e60dfe5abc6f",
                },
              ],
              name: "core/column",
              attributes: {
                anchor: "",
              },
              id: "e84e66a6-a09b-41cb-90af-6e914e1ce665",
            },
          ],
          name: "core/columns",
          attributes: {
            isStackedOnMobile: true,
            anchor: "",
          },
          id: "cdef601e-d095-48fc-b200-7a0244d7af67",
        },
      ],
      name: "core/block",
      attributes: {
        ref: 92,
      },
      id: "3899b6e4-95b1-4941-aedd-1f91863dca7b",
    },
    {
      innerBlocks: [
        {
          name: "core/heading",
          attributes: {
            content: "لورم ایپسوم متن ساختگی با تولید سادگی",
            level: 2,
            anchor: "",
            textAlign: "right",
          },
          id: "bedf966c-dc76-44a5-975e-2d8ab9c85fa1",
        },
        {
          name: "core/paragraph",
          attributes: {
            content:
              "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و بالورم ایپسوم متن ساختگی با تولید سادگی",
            dropCap: false,
            anchor: "",
            align: "right",
          },
          id: "0effe692-4b56-4c54-a7f7-eb52fec2e336",
        },
        {
          name: "acf/ctabutton",
          attributes: {
            name: "acf/ctabutton",
            data: {
              label: "انتخاب سرویس",
              _label: "field_64198956982eb",
              destination: 130,
              _destination: "field_6419896d982ec",
              align: "right",
              _align: "field_64198996982ed",
            },
            mode: "preview",
          },
          id: "3f31733a-c39e-4b70-8dc4-69be8e196fd0",
        },
      ],
      name: "core/cover",
      attributes: {
        useFeaturedImage: false,
        alt: "",
        hasParallax: true,
        isRepeated: false,
        dimRatio: 50,
        backgroundType: "image",
        isDark: false,
        tagName: "div",
        anchor: "",
        url: "http://localhost:10005/wp-content/uploads/2023/03/happy-young-female-dentist-with-tools-over-medical-Z3WGLGH-1.jpg",
        id: 224,
      },
      id: "bc6f36e6-992e-46ac-a5c9-2fed446adc58",
    },
    {
      innerBlocks: [
        {
          name: "core/image",
          attributes: {
            url: "http://localhost:10005/wp-content/uploads/2023/03/img6-2-219x300.jpg",
            alt: "خدمات  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
            caption: "لورم ایپسوم متن ساختگی با تولید سادگی",
            title: "",
            href: "www.google.com",
            rel: "",
            linkClass: "",
            linkTarget: "",
            anchor: "",
            id: 246,
            sizeSlug: "medium",
            linkDestination: "custom",
            className: "is-style-default",
          },
          id: "e2a29c93-5020-4b8e-9a30-9dd65827f452",
        },
        {
          name: "core/image",
          attributes: {
            url: "http://localhost:10005/wp-content/uploads/2023/03/img7-1.jpg",
            alt: "",
            caption:
              '<a href="http://localhost:10005/تماس-با-ما">http://localhost:10005/تماس-با-ما</a>',
            title: "",
            href: "http://localhost:10005/تماس-با-ما",
            rel: "",
            linkClass: "",
            linkTarget: "",
            anchor: "",
            id: 247,
            sizeSlug: "large",
            linkDestination: "custom",
          },
          id: "b85e9eb9-1330-4c8d-9547-14aa8ce04ee8",
        },
        {
          name: "core/image",
          attributes: {
            url: "http://localhost:10005/wp-content/uploads/2023/03/img9-1.jpg",
            alt: "",
            caption:
              "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.",
            title: "",
            href: "",
            rel: "",
            linkClass: "",
            linkTarget: "",
            anchor: "",
            id: 249,
            sizeSlug: "large",
            linkDestination: "none",
          },
          id: "31a999ca-ffcc-4a99-9098-11c96829b28e",
        },
        {
          name: "core/image",
          attributes: {
            url: "http://localhost:10005/wp-content/uploads/2023/03/img.jpg",
            alt: "",
            caption:
              'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزن<a href="http://localhost:10005/درباره-ما">امه و مجله د</a>ر ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.<a href="http://localhost:10005/درباره-ما">http://localhost:10005/درباره-ما</a>',
            title: "",
            href: "",
            rel: "",
            linkClass: "",
            linkTarget: "",
            anchor: "",
            id: 250,
            sizeSlug: "large",
            linkDestination: "none",
            orginalHeight: 520,
            orginalWidth: 379,
          },
          id: "83cd8637-fe23-4346-afed-c3b370479695",
        },
        {
          name: "core/image",
          attributes: {
            url: "http://localhost:10005/wp-content/uploads/2023/03/img8-1.jpg",
            alt: "",
            caption: "ایپسوم متن ساختگی با تولید سادگی نا",
            title: "",
            href: "",
            rel: "",
            linkClass: "",
            linkTarget: "",
            anchor: "",
            id: 248,
            sizeSlug: "large",
            linkDestination: "none",
          },
          id: "14c8bc2b-d81a-47b0-8a44-61fd30697068",
        },
      ],
      name: "core/gallery",
      attributes: {
        images: [],
        ids: [],
        shortCodeTransforms: [],
        caption: "",
        imageCrop: true,
        fixedHeight: true,
        sizeSlug: "large",
        allowResize: false,
        anchor: "",
        linkTo: "none",
      },
      id: "a2771527-a2cc-45e2-be35-cc30418e4892",
    },
    {
      innerBlocks: [
        {
          name: "core/paragraph",
          attributes: {
            content: "",
            dropCap: false,
            anchor: "",
            align: "center",
            placeholder: "Write title…",
            fontSize: "large",
          },
          id: "aaaeb4e5-9967-4f64-ac83-bbaed7a9db89",
        },
        {
          innerBlocks: [
            {
              innerBlocks: [
                {
                  name: "core/heading",
                  attributes: {
                    content: "نظر بیماران در باره ما",
                    level: 2,
                    anchor: "",
                    textAlign: "right",
                    textColor: "primary",
                  },
                  id: "6d2429a6-e866-4a7a-876b-b1600b247f57",
                },
                {
                  name: "core/paragraph",
                  attributes: {
                    content:
                      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
                    dropCap: false,
                    anchor: "",
                    align: "right",
                  },
                  id: "3b25d701-263d-4eda-abaa-78617a32ee73",
                },
                {
                  name: "core/latest-comments",
                  attributes: {
                    commentsToShow: 5,
                    displayAvatar: true,
                    displayDate: true,
                    displayExcerpt: true,
                    align: "right",
                  },
                  id: "ee231ff5-c0de-4df5-bdaa-68f925e17e82",
                },
              ],
              name: "core/column",
              attributes: {
                anchor: "",
              },
              id: "c7133924-a065-48d0-a45a-d526e6016de0",
            },
            {
              name: "core/column",
              attributes: {
                anchor: "",
              },
              id: "77c4cddf-5140-404b-b50a-992ec5ec067e",
            },
          ],
          name: "core/columns",
          attributes: {
            isStackedOnMobile: true,
            anchor: "",
          },
          id: "05aa780a-591c-4995-aaf6-2532452ac15e",
        },
      ],
      name: "core/cover",
      attributes: {
        useFeaturedImage: false,
        alt: "",
        hasParallax: false,
        isRepeated: false,
        dimRatio: 50,
        backgroundType: "image",
        isDark: true,
        tagName: "div",
        anchor: "",
        url: "http://localhost:10005/wp-content/uploads/2023/03/Background.png",
        id: 259,
      },
      id: "08cfe81d-bacf-4a4f-b9f5-7857b99f0f9b",
    },
    {
      name: "core/heading",
      attributes: {
        content: "پزشکان",
        level: 2,
        anchor: "",
        textAlign: "right",
        textColor: "primary",
      },
      id: "8e9d8270-f2b9-41ea-9089-6d4873d9eaeb",
    },
    {
      name: "icb/cards",
      attributes: {
        align: "",
        clientId: "d27c0750-e422-4621-8f89-a1c309a1ebb4",
        cards: [
          {
            background: {
              color: "#fff",
            },
            img: "http://localhost:10005/wp-content/uploads/2023/03/female-doctor-standing-in-clinic-corridor-G2AQW5C-11.jpg",
            title: "دکتر پارسا پیروزی",
            desc: "<strong>متخصص ارتودنسی</strong><br>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.",
            btnLabal: "مشاهده سوابق",
            btnUrl: "http://localhost:10005/درباره-ما/",
          },
        ],
        layout: "horizontal",
        theme: "theme3",
        columns: {
          desktop: 1,
          tablet: 1,
          mobile: 1,
        },
        columnGap: "20px",
        rowGap: "20px",
        isImg: true,
        imgHeight: "200px",
        imgPos: "first",
        background: {
          color: "#0962ea",
        },
        padding: {
          top: "0px",
          right: "0x",
          bottom: "0px",
          left: "0px",
        },
        cardPadding: {
          top: "0",
          right: "0",
          bottom: "0",
          left: "0",
        },
        cardRadius: "8px",
        cardShadow: [
          {
            hOffset: "0px",
            vOffset: "4px",
            blur: "8px",
            spreed: "0px",
            color: "#0003",
          },
        ],
        contentAlign: "right",
        contentPadding: {
          top: "20px",
          right: "15px",
          bottom: "15px",
          left: "15px",
        },
        titleTypo: {
          fontSize: "20",
        },
        descTypo: {
          fontSize: "16",
        },
        btnTypo: {
          fontSize: 15,
          textDecoration: "none",
        },
        btnAlign: "right",
        btnColors: {
          color: "#fff",
          bg: "#4527a4",
        },
        btnHovColors: {
          color: "#fff",
          bg: "#062d92",
        },
        btnPadding: {
          top: "10px",
          right: "15px",
          bottom: "10px",
          left: "15px",
        },
        btnRadius: "8px",
        titleColor: "#062d92",
        descColor: "#000",
      },
      id: "4ceba760-97fe-4bab-8aa1-3e06c1b046e8",
    },
    {
      name: "icb/cards",
      attributes: {
        align: "",
        clientId: "bac8f55a-5466-4830-81dc-ec913548e014",
        cards: [
          {
            background: {
              color: "#fff",
            },
            img: "http://localhost:10005/wp-content/uploads/2023/03/female-doctor-standing-in-clinic-corridor-G2AQW5C-1-1.jpg",
            title: "دکتر میرزایی",
            desc: "جراح دندان پزشک",
            btnLabal: "",
            btnUrl: "#",
          },
          {
            background: {
              color: "#fff",
            },
            img: "http://localhost:10005/wp-content/uploads/2023/03/female-doctor-standing-in-clinic-corridor-G2AQW5C-1.jpg",
            title: "دکتر فرنوش زاده",
            desc: "دستیار دنداپزشک",
            btnLabal: "مشاهده",
            btnUrl: "#",
          },
          {
            background: {
              color: "#fff",
            },
            img: "http://localhost:10005/wp-content/uploads/2023/03/female-doctor-standing-in-clinic-corridor-G2AQW5C-12.jpg",
            title: " دستیار فرخ پور",
            desc: "دستیار دنداپرشک",
            btnLabal: "Button",
            btnUrl: "#",
          },
          {
            background: {
              color: "#fff",
            },
            img: "http://localhost:10005/wp-content/uploads/2023/03/female-doctor-standing-in-clinic-corridor-G2AQW5C-11.jpg",
            title: "دکتر رضا مولایی",
            desc: "متخصص ارتودنسی",
            btnLabal: "Button",
            btnUrl: "#",
          },
        ],
        layout: "vertical",
        theme: "default",
        columns: {
          desktop: 4,
          tablet: 3,
          mobile: 1,
        },
        columnGap: "30px",
        rowGap: "20px",
        isImg: true,
        imgHeight: "200px",
        imgPos: "first",
        background: {
          color: "#0000",
        },
        padding: {
          top: "0px",
          right: "0x",
          bottom: "0px",
          left: "0px",
        },
        cardPadding: {
          top: "0",
          right: "0",
          bottom: "0",
          left: "0",
        },
        cardRadius: "8px",
        cardShadow: [
          {
            hOffset: "0px",
            vOffset: "4px",
            blur: "8px",
            spreed: "0px",
            color: "#0003",
          },
        ],
        contentAlign: "right",
        contentPadding: {
          top: "20px",
          right: "15px",
          bottom: "15px",
          left: "15px",
        },
        titleTypo: {
          fontSize: "20",
        },
        descTypo: {
          fontSize: "16",
        },
        btnTypo: {
          fontSize: 15,
          textDecoration: "none",
        },
        btnAlign: "left",
        btnColors: {
          color: "#fff",
          bg: "#4527a4",
        },
        btnHovColors: {
          color: "#fff",
          bg: "#fe6601",
        },
        btnPadding: {
          top: "10px",
          right: "15px",
          bottom: "10px",
          left: "15px",
        },
        btnRadius: "8px",
        titleColor: "#000",
        descColor: "#000",
      },
      id: "6c98c0e1-0010-43e2-9d82-6088bc24977e",
    },
  ],
};
