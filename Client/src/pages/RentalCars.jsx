import React from "react";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import Search from "../Icons/Search";


const RentalCars = () => {
  return (
    <>
      <Header />
      <div className="search mt-20 mx-auto bg-blue-10 flex justify-center w-fit relative ">
        <input
          type="search"
          className="border  rounded-full pl-8 py-1 focus:outline-none font-eczar focus:bg-white [&::-webkit-search-cancel-button]:hidden "
          placeholder="Search for cars"
        />
        <span className="absolute left-2 top-2 ">
          <Search />
        </span>
      </div>
      <div className=" bg   flex flex-col items-center lg:items-start mt-4">
        <div className="cat-and-car-wrapper lg:flex lg:items-start  font-eczar ">
          <div className="categories  flex text-nowrap gap-x-10 sm:gap-x-0 p-2 text-sm flex-wrap max-[415px]:justify-around lg:flex-col  max-lg:justify-around md:text-base md:space-y-7 md:px-9 ">
            <div className="type flex flex-col items-center gears max-[479px]:order-4 max-[479px]:flex-2 space-y-2">
              <p className="font-semibold ">Gear</p>
              <div className="self-center *:space-x-1 *:space-y-3">
                <div>
                  <input type="radio" name="type" value="Any" className="" />
                  <label for="Any">Any</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="type"
                    value="Automatic"
                    className=""
                  />
                  <label for="Automatic">Automatic</label>
                </div>
                <div>
                  <input type="radio" name="type" value="Manual" />
                  <label for="Manual">Manual</label>
                </div>
              </div>
            </div>
            <div className="price flex flex-col items-center space-y-2">
              <p className="font-semibold">
                Price / <span className="text-sm">Day</span>
              </p>
              <div className="grid grid-cols-2 prices lg:flex flex-col *:space-x-1 *:space-y-3">
                <div className="">
                  <input type="radio" name="price" value="Any" className="" />
                  <label for="Any">Any</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="price"
                    value="Automatic"
                    className=""
                  />
                  <label for="Automatic">Below 15K</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="price"
                    value="Automatic"
                    className=""
                  />
                  <label for="Automatic">15K-20k</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="price"
                    value="Automatic"
                    className=""
                  />
                  <label for="Automatic">20K-25K</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="price"
                    value="Automatic"
                    className=""
                  />
                  <label for="Automatic">Above 25K</label>
                </div>
              </div>
            </div>
            <div className="color flex flex-col items-center space-y-2 ">
              <p className="font-semibold">Color</p>
              <div className="colors grid grid-cols-2   lg:flex flex-col *:space-x-1 *:space-y-3">
                <div>
                  <input type="radio" name="color" value="Any" className="" />
                  <label for="Any">Any</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="color"
                    value="Automatic"
                    className=""
                  />
                  <label for="WhiteGray">White/Gray</label>
                </div>
                <div>
                  <input type="radio" name="color" value="Manual" />
                  <label for="Red">Red</label>
                </div>
                <div>
                  <input type="radio" name="color" value="Manual" />
                  <label for="Black">Black</label>
                </div>
                <div>
                  <input type="radio" name="color" value="Manual" />
                  <label for="Yellow">Yellow</label>
                </div>
              </div>
            </div>
          </div>
          <div className="cars text-white bg-black lg:h-[92svh] lg:overflow-y-scroll p-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
            voluptates minus quisquam, nisi recusandae sint natus? Repellendus
            tenetur perspiciatis est inventore maiores velit atque praesentium.
            Odit beatae accusantium sapiente inventore. Eaque quia autem ipsam
            corrupti enim voluptates possimus veritatis, nostrum fugiat.
            Molestiae quaerat perspiciatis sequi! Nihil est facilis, accusantium
            doloremque, iste fuga architecto excepturi asperiores id omnis sunt
            voluptatum beatae? Sint, quidem accusantium aliquid dicta, natus
            molestias assumenda quos quaerat esse, neque alias pariatur. Eos
            labore ea alias vero, quasi inventore laudantium eius delectus? Ea
            explicabo enim sed odit necessitatibus? Voluptatem modi, aliquid
            dignissimos ipsa tempore, unde repellat eum exercitationem quisquam
            aspernatur reiciendis saepe. Deleniti mollitia laboriosam doloribus
            commodi. Quisquam quis iste commodi exercitationem earum. Aspernatur
            officiis quisquam mollitia officia? Fuga vel minus saepe id
            temporibus dolore eaque a numquam. Cumque, dolore. Natus doloremque
            iste obcaecati cum temporibus, dolorem rem facere, mollitia nobis
            voluptatum, odio possimus eius cumque sit aliquam. Eum, magni
            aspernatur! Et est deserunt minima non cumque culpa a doloribus
            ullam expedita doloremque, ratione cupiditate officiis maxime
            explicabo! Unde harum tempore ad ut recusandae obcaecati, tempora
            debitis incidunt! Voluptates voluptatibus fugiat neque, enim vel
            exercitationem molestiae odit sunt libero non obcaecati similique
            quae ad recusandae dolorum alias quas itaque delectus quo quisquam
            ex eum. Quae natus quod alias. Nemo ipsum cupiditate sed sapiente
            odit nam quasi, laboriosam dolor architecto recusandae eligendi.
            Similique natus numquam sed nostrum accusantium officia rem
            consequuntur reiciendis, quos recusandae facere aut doloribus libero
            nisi. Eos sunt eius corporis voluptas impedit illum incidunt eum
            eaque quo! Sit officia cupiditate porro velit, eveniet explicabo
            tempore necessitatibus consectetur nobis consequuntur minima
            aspernatur perspiciatis, inventore omnis dolor eligendi! Tempore
            praesentium dignissimos, itaque aspernatur, quam eum ipsa recusandae
            ex, aut deleniti culpa ipsum consequatur dolor voluptas omnis minus
            mollitia. Cupiditate quo consequuntur laudantium hic eum et unde
            sint eius. Sunt molestias, itaque aliquam tenetur fugiat sapiente
            inventore consectetur veniam doloribus consequuntur nam laboriosam a
            eos distinctio, accusantium amet. Consectetur, saepe eligendi
            voluptate iure veritatis cumque fuga laborum obcaecati natus! Ipsa
            ipsum ex maiores aliquid officiis esse cumque, voluptatibus delectus
            atque quaerat maxime amet earum dignissimos modi laborum! Deserunt
            inventore sapiente necessitatibus incidunt adipisci quas atque nisi
            nam. Dolores, odio! Fuga debitis ab blanditiis perferendis, ad
            nostrum id quod recusandae numquam molestiae eos. In repellendus
            vero numquam ea? Adipisci excepturi quam voluptatum, accusantium
            atque sapiente consequatur expedita aliquam magnam architecto? Sint
            nam amet at autem. Sapiente excepturi sint veniam perspiciatis enim
            tempora ad nesciunt quidem recusandae in eius debitis aperiam
            corrupti culpa iusto temporibus sed, eveniet repudiandae, molestias
            adipisci. Voluptatum! Atque nulla cupiditate ad, sint in,
            voluptatibus eum labore a numquam necessitatibus odio, saepe totam
            fuga. Deleniti excepturi soluta atque magni provident quas labore,
            vitae ipsa optio recusandae harum earum. Modi expedita eum omnis
            rerum maxime perferendis saepe eligendi facilis? Quod tenetur sed et
            dignissimos qui, ipsam porro minus distinctio excepturi, debitis
            fugiat iusto hic. Libero corporis quibusdam autem nisi? Veritatis
            culpa soluta dolor rem adipisci voluptates sint est incidunt modi
            odit exercitationem neque voluptate aspernatur qui ut dignissimos
            deserunt doloribus eos quibusdam dicta, aut voluptatibus alias quis
            maiores! Veniam. Voluptatem architecto eos perferendis laborum ut
            recusandae, adipisci eum alias nostrum facilis esse, saepe nobis qui
            pariatur in error deserunt illo non sunt enim a at ullam veniam!
            Incidunt, deleniti? Odit commodi distinctio alias quae error
            deserunt dolor, similique fugit aliquam. Perspiciatis culpa
            necessitatibus facere doloribus aut a fugiat quas consequatur, ipsa
            vero placeat inventore est in voluptatum delectus laborum! Tempore
            quasi quas sapiente deserunt recusandae? Cum animi deserunt vel id
            maxime accusantium recusandae. Neque cupiditate totam commodi
            tenetur accusantium distinctio, quo molestiae eveniet pariatur hic
            voluptatem blanditiis, suscipit soluta? Quae, sit. Iste, delectus
            sit impedit quaerat commodi voluptatem natus provident? Saepe odit,
            illum maxime, suscipit velit veniam expedita error doloribus
            laudantium nam repudiandae facilis eligendi mollitia. Beatae,
            aliquam adipisci. Suscipit velit hic sapiente asperiores? Voluptatem
            aliquam asperiores vel quidem eligendi velit molestias iure vitae
            reiciendis! Numquam voluptatibus iure quam dignissimos reiciendis
            cupiditate nihil rerum velit veritatis. Voluptatibus, amet
            architecto. Eos officiis numquam laudantium minima officia et
            expedita, esse nobis quis debitis aspernatur sequi iusto illum,
            quibusdam totam quam incidunt! Sit exercitationem aperiam adipisci
            velit soluta aliquid nemo perspiciatis a? Eum possimus natus nihil
            voluptatem qui quod quae praesentium ad velit doloribus earum nulla
            amet officiis facilis, perspiciatis quos, numquam ex beatae
            repudiandae itaque. Veniam corporis perspiciatis totam autem
            dolores? Quam perspiciatis tempore similique ducimus quo? Tempora
            mollitia numquam ab assumenda. Voluptatibus, quia sunt natus,
            dolores nostrum eligendi dolore fugit, aperiam voluptatum unde ut
            expedita incidunt. Delectus a ipsam quae? Quaerat praesentium
            excepturi adipisci fugit saepe id distinctio sunt aperiam accusamus.
            Molestias, reiciendis! Commodi, nihil quidem aut consequatur quo,
            cupiditate voluptatem laboriosam laudantium aspernatur deserunt
            dolor dolores esse adipisci modi! Amet, assumenda. Tempora earum
            dolores quibusdam, soluta ut qui libero quasi animi quod non veniam
            officia illo nemo vitae nisi. Ipsum enim, quaerat vero commodi
            architecto quibusdam omnis error harum! Nihil veniam libero ullam.
            Nihil repellat aliquam non, ad aperiam veniam, quas vel voluptates
            at laudantium, inventore cum soluta hic ab voluptate. Provident
            alias excepturi earum magnam veritatis dolorum perspiciatis!
            Deleniti ex eius est impedit nam, aliquid at quod voluptatum iusto
            eligendi, sint consequatur mollitia optio non praesentium quia atque
            ducimus veritatis reiciendis. Officia blanditiis sequi sed,
            perferendis soluta modi. Atque velit nam voluptates sint tempora
            nesciunt! Iusto eius ad ipsum explicabo amet laborum distinctio
            fugit. Sed officia deserunt laudantium beatae? Unde dignissimos,
            facilis inventore sit incidunt harum reiciendis vero. Esse, dicta
            eius, odio ad cum nostrum animi nisi sequi sunt omnis vero
            temporibus eos ea, maiores praesentium facere maxime asperiores
            neque. Enim, natus doloremque expedita molestiae culpa ratione
            repellendus? Praesentium, totam? Nihil asperiores doloremque
            inventore qui eveniet repellendus quasi aut hic illo ea optio,
            tempora consectetur rerum consequatur ut ullam repellat! Qui vel
            facere dolorum excepturi velit iusto neque. Cupiditate, natus
            laboriosam laudantium voluptatem vero nobis eveniet quo ad odio
            minima eos explicabo ducimus placeat, nam facere totam, esse
            suscipit. Quos dolorem rem ab nobis aperiam dolores veniam
            provident. Corrupti ipsum praesentium, saepe similique nulla eum
            voluptatibus qui possimus amet dolores accusantium atque corporis
            quo vitae perferendis expedita ad odio voluptate. Sequi, laboriosam
            qui iure nisi vero consectetur possimus? Corporis, ex nulla, sint
            velit repudiandae adipisci, facere nihil voluptatem laborum unde
            corrupti quis cumque? Beatae ex porro quam a autem eligendi id,
            architecto error, sunt velit, labore voluptates veniam! Nam eius
            eligendi dolorum quo omnis non voluptas laudantium. Dolorum impedit
            minima, ab repellat, eius fugiat accusantium consectetur aut
            obcaecati velit, nesciunt similique dolorem nostrum sed corporis
            ducimus totam autem! Eligendi quisquam, laborum minima ab dicta
            labore possimus sed necessitatibus, aspernatur sequi pariatur
            consequuntur ea laudantium quas quo sint maiores sapiente officia
            culpa architecto repudiandae? Dolores suscipit hic magni dolore? Non
            consequuntur eaque saepe explicabo ipsa? Consequuntur ratione magnam
            similique quisquam. Impedit atque quo doloremque qui vitae
            temporibus unde, ipsam doloribus animi illo vel assumenda? Eligendi,
            quae? Eaque, repellendus enim. Autem explicabo eius dolorum ab.
            Eligendi consectetur veritatis dolorum vero expedita ratione,
            doloremque adipisci ipsam dolor suscipit neque autem similique
            doloribus. Necessitatibus dolorem unde consequuntur ducimus minus
            beatae deleniti velit. Adipisci nulla reprehenderit eos facere at
            illum molestiae, explicabo accusamus dignissimos fugit, quas totam
            amet quaerat facilis? Officiis vero, repudiandae quae harum nihil
            suscipit in quam tenetur dolorum eveniet assumenda! Amet, officiis?
            Deleniti nulla magnam accusamus provident sed ducimus odit aliquam
            ex non id praesentium, obcaecati, modi exercitationem odio
            doloremque aliquid eaque! Ex quaerat quisquam quasi molestias!
            Nobis, repudiandae sint. Nisi deleniti harum repellat, asperiores
            molestias modi consequatur autem voluptate dicta eaque debitis
            recusandae distinctio ut quidem libero tempore assumenda voluptatum
            ratione? Velit, aut! Ab est nostrum blanditiis explicabo vitae? Est
            quia ratione eos alias pariatur maxime, laboriosam saepe voluptates
            officia unde reprehenderit natus ducimus? Ipsum sequi incidunt,
            itaque illo, officia, eius libero placeat provident nisi labore
            maxime natus beatae? Minima esse quidem veniam aut atque nisi iste
            eaque necessitatibus quo, dolor blanditiis, labore, ipsa aliquid
            provident ducimus possimus nulla laudantium? Amet, quae sapiente ea
            odit saepe porro eaque corporis? Eligendi fuga dolorem illo quia ab
            nesciunt, laudantium quis porro deleniti consectetur saepe adipisci,
            non expedita odio velit explicabo vero, quaerat beatae. Dicta animi
            at, rem magni ex libero voluptatum. Corporis minima debitis modi
            architecto corrupti saepe quas possimus tenetur laborum impedit,
            dolorem asperiores magnam natus hic repellat voluptatum temporibus
            velit consequuntur reiciendis accusantium veniam officia vitae fuga.
            Eligendi, aliquid. Deleniti odio quisquam vel molestias
            perspiciatis? Iure fuga veritatis eum aperiam cum asperiores
            recusandae, explicabo expedita. Qui laboriosam explicabo repudiandae
            labore temporibus! Quisquam nihil, atque aspernatur enim sit odit
            fugit! Ratione, consequatur dolores quo amet molestiae culpa, minus
            quibusdam corrupti fugit minima neque magnam? Natus neque blanditiis
            necessitatibus, nihil architecto impedit culpa facilis, libero
            voluptatum omnis iure dolorum at tenetur. Accusamus voluptatem animi
            recusandae, nobis error odio distinctio, voluptatum, voluptates
            nihil omnis dignissimos? Nulla sapiente magnam vero alias, autem
            neque cum saepe dolor eum qui nihil, dicta recusandae, quaerat
            libero! Rem tenetur vitae maxime illum, ex odio veritatis ipsum iure
            quo et quidem soluta praesentium numquam officiis dolore facere
            culpa aspernatur, nisi molestias vero placeat. Esse modi eos
            inventore dicta! Quisquam hic mollitia, quo rem at voluptate ratione
            autem laborum quas omnis? Id corrupti vitae ipsa repellendus,
            perspiciatis nesciunt harum, iusto aliquam, sequi sed distinctio
            reiciendis voluptatum maiores ducimus molestiae! Odit provident
            nihil iste ex iusto vel incidunt voluptatem accusantium, ab
            exercitationem, quas at, cumque nostrum beatae laboriosam possimus
            eius iure a eligendi? Animi dolorem aperiam cupiditate labore amet
            quaerat! Ab mollitia quibusdam animi vel ratione natus dolore,
            repellendus nihil aut! Debitis, dolore! Rerum adipisci, quo amet
            laboriosam et officia qui fugiat odit. Doloribus unde deleniti
            perferendis nam perspiciatis totam! Iusto perspiciatis earum ipsum
            consectetur ad dolor, ipsa officia, tempore veniam est dolorem
            similique perferendis, qui beatae rem expedita architecto dolorum
            odit sit nulla facilis ducimus! Aliquam magni ea nesciunt. Ut quam
            et nulla aperiam? Eos omnis et asperiores placeat totam in quam
            dolores eius, aliquid repellendus possimus ea neque sit aut qui rem
            vero iste iusto fugit hic quos. Temporibus qui ullam laudantium odit
            sequi excepturi enim reiciendis, beatae, nostrum nemo incidunt.
            Cupiditate voluptatum voluptatibus nulla veniam deleniti laborum,
            ullam explicabo consequatur officiis maiores alias quas, quia atque
            quod! Laboriosam animi perferendis facilis exercitationem ullam,
            officiis quas consectetur laudantium inventore repellat! Impedit
            aspernatur nesciunt aliquid possimus saepe asperiores voluptates
            optio totam, sequi magnam odit! Aliquam veniam voluptas excepturi?
            Veritatis? Similique asperiores unde quo deleniti consequuntur esse
            id reprehenderit repudiandae, facere soluta, quos, animi
            perspiciatis error at quae! Nisi hic inventore esse maxime tenetur
            nihil omnis dolor illum ipsum. Distinctio? Sapiente est facilis
            quod, quasi quam ducimus pariatur culpa quibusdam totam possimus
            cumque rerum quas ut qui ipsa eligendi esse ad, inventore nam? Vitae
            ipsum possimus, porro sit cupiditate obcaecati! Incidunt vero
            debitis culpa illo, cumque ex recusandae! Error magnam earum, ipsa
            aperiam quasi repellat fugit. Commodi animi enim in similique
            voluptas, quas delectus veritatis voluptates culpa optio, alias est.
            Facilis vero soluta similique expedita, deleniti natus ipsam vel
            consectetur necessitatibus aperiam iure fugiat molestiae fugit non
            nam ipsa perspiciatis repellat quisquam. Natus, adipisci excepturi
            perspiciatis voluptate asperiores architecto dignissimos. Nobis
            molestias ratione commodi non quas autem fuga quisquam incidunt
            illum, eaque ut animi reiciendis voluptas asperiores id suscipit
            tempora repellat eligendi quibusdam totam architecto perferendis
            nisi iste exercitationem. Sunt! Velit, natus a. Porro sequi commodi
            quas corrupti numquam laudantium perferendis exercitationem,
            sapiente voluptatibus. Molestiae mollitia fuga amet magni corrupti,
            aspernatur est illo, in voluptates veniam recusandae ex animi. Sint!
            Dicta vitae esse accusamus nostrum commodi unde dignissimos laborum
            optio at, consequatur in obcaecati. Minus natus ullam maxime saepe,
            reiciendis minima cupiditate omnis pariatur quia laudantium ratione
            dolorum quas voluptatibus! Maiores harum cumque, illo nostrum porro
            fugiat molestias velit deleniti! Eligendi ab accusantium laudantium
            rem earum qui nobis nisi dolore aspernatur doloremque vel, ut,
            aliquam fuga error possimus a animi? Itaque ipsum vero rem.
            Explicabo atque excepturi nobis tenetur ipsam laudantium illo est
            velit suscipit pariatur ea voluptas similique officiis
            necessitatibus dolor vero obcaecati molestias, et provident? Quidem,
            et earum. Veritatis fugit sequi, accusantium consequuntur placeat
            minus aperiam adipisci laudantium voluptates quod dolore sunt error
            nam cupiditate accusamus odit debitis aut, incidunt in quos nostrum
            quam quia. Enim, facilis et. Ipsum hic tempore distinctio, amet quos
            voluptatum illo excepturi molestias. Labore repudiandae nulla
            asperiores rerum, nemo tempora obcaecati dolor doloremque magni et
            ad quisquam porro suscipit itaque odio provident perspiciatis?
            Voluptate, incidunt quos! Ab maxime voluptatibus quisquam cumque
            animi distinctio fugiat natus labore reiciendis voluptatem
            reprehenderit debitis nisi pariatur fugit consequatur accusamus
            sapiente officia neque, iste vel officiis ipsa sint? Saepe delectus
            veritatis ducimus deleniti doloremque debitis, illo perferendis
            inventore, illum voluptates esse! Voluptate magnam necessitatibus
            quasi iste. Deleniti maxime at laudantium, fugiat voluptate commodi
            facere molestias tempora. Reiciendis, nesciunt? Dolorum sit
            recusandae ratione cumque, ab eligendi? Eum reiciendis ipsam itaque
            facilis ut vel, eius aliquid blanditiis animi officia, repellendus
            maiores ex repellat pariatur sequi et impedit. Ratione, eos sed?
            Minus magni laborum numquam explicabo reiciendis ipsa temporibus.
            Nesciunt mollitia reiciendis, temporibus, adipisci rerum ipsum
            laborum alias ex sunt quidem aspernatur. Aliquid similique eaque
            porro, fugit maxime quis repellendus quisquam! Sequi officiis eius
            voluptates autem? In recusandae eligendi doloribus sequi perferendis
            consequatur voluptate beatae veritatis est rerum quisquam
            perspiciatis labore, sint harum commodi facere et dignissimos optio
            at eum? Debitis? Iste, magni. Doloribus esse fugit reprehenderit
            excepturi fugiat, minima eius. Cumque quam asperiores commodi
            officiis explicabo. Consequatur, debitis quidem incidunt, quaerat
            consequuntur possimus, assumenda beatae magni labore veritatis
            doloremque vel. Aperiam eum veniam, rerum ea iste ut optio atque
            cumque, dolore impedit nihil! Maiores natus mollitia itaque sequi,
            ad id dolore excepturi quas debitis qui, est, quisquam expedita ab
            nam. Blanditiis mollitia debitis facere nemo consectetur provident
            quo, quae sunt nam animi officia distinctio perferendis dolor
            doloribus voluptate omnis, consequatur quos nulla labore ab quia. Et
            enim nulla quam saepe! Ratione et ipsa consequatur ducimus minus
            sunt earum voluptates vero, eveniet deserunt adipisci veritatis
            assumenda. Odit eum libero architecto illo quia necessitatibus
            reprehenderit ut rem odio? Eveniet, numquam mollitia! Deserunt.
            Molestiae, dolor. Neque dolore reiciendis corrupti. Quae dolores
            itaque dicta nulla odio laborum? Est quaerat, repellat sapiente at
            aliquid suscipit laudantium libero fuga accusamus optio perspiciatis
            sit deserunt non quia! Maiores voluptatibus rem dignissimos.
            Tempore, molestias. Minus suscipit corrupti recusandae veritatis
            maxime tempore vero sunt, nulla laudantium, commodi in similique
            harum, natus aliquid eligendi dolorem voluptate et laborum alias
            eveniet. Minus dicta aliquid quis aperiam fugiat ea alias voluptatum
            nobis eos enim, odit doloribus soluta eveniet in saepe quia nesciunt
            exercitationem consectetur quidem animi. Ipsam asperiores tempore
            officia id. Vitae! Dolores modi cumque a quibusdam dolore maxime
            sit? Distinctio fuga numquam ex iusto reiciendis pariatur expedita
            adipisci, quibusdam nostrum quas aut. Est distinctio assumenda
            quidem quo eum tempora ipsam modi! Animi tempore in recusandae
            architecto quos quisquam vel doloribus at, a officia sint commodi,
            ullam quaerat libero earum voluptatem et natus ipsum reprehenderit
            qui voluptas facilis! Optio commodi aspernatur pariatur? Molestias,
            officia? Libero illo sint in neque pariatur commodi officiis
            voluptates beatae quo temporibus odit excepturi nam, nisi iusto.
            Sapiente at cum explicabo delectus. Quae, blanditiis. Consequuntur
            sint neque molestias. Maxime totam, laborum voluptate obcaecati sint
            tempore tenetur modi ea quasi quae hic cupiditate enim consectetur
            libero necessitatibus vitae ab delectus. Nemo, earum obcaecati!
            Perspiciatis in consequuntur soluta ullam. Quisquam? Laboriosam
            neque, excepturi nisi officiis a suscipit debitis maxime blanditiis
            fugiat consequuntur quaerat pariatur magni itaque modi laborum
            beatae porro odio saepe sapiente dicta perspiciatis sint voluptate.
            Autem, odio maxime. Vel nesciunt est dolor totam ut iste placeat
            aspernatur facere. Repellat mollitia pariatur, cum eos enim
            obcaecati inventore doloremque nihil ea fugit corrupti illum quia
            maxime nemo. Nobis, ullam eius. Atque quae reprehenderit magnam
            dolores qui consequatur placeat molestias consequuntur eius corrupti
            officiis voluptatum quibusdam beatae cupiditate repudiandae nisi in
            eveniet, ipsa dolorem? Dignissimos voluptatibus perspiciatis quaerat
            libero quia vitae? Illum eligendi illo laudantium? Temporibus quas
            iure mollitia, accusamus sunt voluptates repudiandae similique
            corporis doloremque illo a dignissimos ipsam quaerat odit eos magni
            nostrum perferendis iusto corrupti vel tenetur! Illum. In, enim
            voluptatibus inventore perferendis et error eos at dolor temporibus,
            quibusdam, ex aspernatur ut eius ipsam? Suscipit aut culpa sapiente
            voluptates, et totam consequuntur natus! Officiis alias blanditiis
            est? Architecto maxime nulla quisquam eos asperiores vero, unde
            reprehenderit ab consequatur quae praesentium placeat doloremque
            beatae amet voluptate porro, sunt dignissimos vitae iste ipsum
            tempore laudantium quibusdam magni? Dicta, nobis. Optio dignissimos,
            cupiditate incidunt magni ab neque quam cum. Perspiciatis id ad,
            nostrum est quaerat quod aspernatur delectus reprehenderit expedita
            illum labore veritatis temporibus qui culpa minus eligendi doloribus
            laudantium. Molestiae, natus. Modi quis libero, maiores animi
            debitis voluptatem tempora obcaecati, numquam, error ea explicabo.
            Blanditiis et sunt est libero harum voluptatem, recusandae vel
            eligendi, quo totam, dolorum tempore quidem. Tenetur, ullam impedit
            facilis consequatur, distinctio provident deserunt voluptas vero
            libero, aperiam sequi enim ducimus? Laboriosam officia a numquam
            quidem nesciunt cupiditate omnis harum eaque! Ratione labore dolores
            quo sequi? Odit repellendus molestiae repudiandae quasi, officia cum
            explicabo ipsam at debitis et doloribus velit amet exercitationem,
            dolorem voluptatem eius ipsa aliquid. Accusantium obcaecati labore
            dolores sunt recusandae, inventore repellendus non. Maxime sequi
            temporibus, ad nam nihil, quae ipsam eligendi ipsa ducimus incidunt
            officia quibusdam, atque dolorem quas? Ullam sequi, magni facilis
            fugiat distinctio possimus adipisci expedita modi ex illum sit!
            Repudiandae fuga dolor facere fugit id quod, nemo obcaecati
            laboriosam quae tenetur assumenda blanditiis dolore veritatis atque
            repellendus similique laborum perspiciatis! Sit facilis soluta magni
            doloribus ducimus vero beatae sapiente! Voluptates, provident
            laborum perferendis ipsum unde veniam esse sint placeat alias
            quidem. Nostrum officia veritatis iusto. Blanditiis iure alias,
            architecto voluptate aspernatur nesciunt perferendis dolorem sint
            voluptatibus quas harum voluptates! Nulla, natus fugiat veniam, ipsa
            sit voluptate nesciunt vitae, ad in nam odio! Ab nulla ipsa suscipit
            nihil labore maiores expedita, ea minima esse, aliquam minus
            possimus nesciunt, tenetur ratione. Fuga veniam laudantium placeat
            magnam nesciunt, ab dignissimos, harum quos officia deserunt
            obcaecati illum unde consectetur similique architecto nihil cum.
            Illo consequatur earum nostrum laboriosam sit, beatae corrupti
            impedit error? Quam labore maiores voluptas blanditiis, dolore
            voluptates sapiente praesentium odit vel molestias in corrupti neque
            dignissimos? Eveniet est nam architecto, animi quos deleniti quis
            culpa eaque quae molestiae porro quidem.
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RentalCars;
