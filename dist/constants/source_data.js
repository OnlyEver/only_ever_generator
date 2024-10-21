"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnFields = returnFields;
exports.returnSourceData = returnSourceData;
exports.returnHeadings = returnHeadings;
exports.returnCardResponse = returnCardResponse;
const sourceString = [
    {
        "block_type": "paragraph",
        "content": "**Sunni [[Islam|Islam|0|wiki]]** is the largest [[Islamic_schools_and_branches|branch|1|wiki]] of Islam, followed by 85–90% of the world's [[Muslims|Muslims|2|wiki]]. Its name comes from the word *[[Sunnah|Sunnah|3|wiki]]*, referring to the tradition of [[Muhammad|Muhammad|4|wiki]]. The differences between Sunni and [[Shia_Islam|Shia Muslims|5|wiki]] arose from a disagreement over the [[Succession_to_Muhammad|succession to Muhammad|6|wiki]] and subsequently acquired broader political significance, as well as [[Schools_of_Islamic_theology|theological|7|wiki]] and [[Fiqh|juridical|8|wiki]] dimensions. According to Sunni traditions, Muhammad left no successor and the participants of the [[Saqifah|Saqifah event|9|wiki]] appointed [[Abu_Bakr|Abu Bakr|10|wiki]] as the next-in-line (the first [[Caliph|caliph|11|wiki]]). This contrasts with the [[Shia_Islam|Shia view|12|wiki]], which holds that Muhammad appointed his son-in-law and cousin [[Ali|Ali ibn Abi Talib|13|wiki]] as his successor."
    },
    {
        "block_type": "paragraph",
        "content": "The adherents of Sunni Islam are referred to in [[Arabic|Arabic|14|wiki]] as ' (\"the people of the Sunnah and the community\") or ' for short. In English, its doctrines and practices are sometimes called ***Sunnism***, while adherents are known as **Sunni Muslims**, **Sunnis**, **Sunnites** and **Ahlus Sunnah**. Sunni Islam is sometimes referred to as \"***orthodox Islam***\",  though some scholars view this translation as inappropriate."
    },
    {
        "block_type": "paragraph",
        "content": "The [[Quran|Quran|15|wiki]], together with [[Hadith|hadith|16|wiki]] (especially those collected in [[Kutub_al-Sittah|Kutub al-Sittah|17|wiki]]) and [[Ijma|binding juristic consensus|18|wiki]], form the basis of all [[Fiqh|traditional jurisprudence|19|wiki]] within Sunni Islam. [[Sharia|Sharia|20|wiki]] rulings are derived from these basic sources, in conjunction with [[Qiyas|analogical reasoning|21|wiki]], [[Istislah|consideration|22|wiki]] of [[Maslaha|public welfare|23|wiki]] and [[Istihsan|juristic discretion|24|wiki]], using the [[Principles_of_Islamic_jurisprudence|principles of jurisprudence|25|wiki]] developed by the traditional [[Madhhab|legal schools|26|wiki]]. In matters of [[Aqidah|creed|27|wiki]], the Sunni tradition upholds the six pillars of *[[Iman_(concept)|imān|28|wiki]]* (faith) and comprises the [[Ash'ari|Ash'ari|29|wiki]] and [[Maturidi|Maturidi|30|wiki]] schools of [[Kalam|Kalam|31|wiki]] (theology) as well as the textualist school known as [[Traditionalist_Theology_(Islam)|traditionalist theology|32|wiki]]."
    },
    {
        "block_type": "heading",
        "content": "Terminology",
        "heading_level": 1,
        "children": [
            {
                "block_type": "heading",
                "content": "Sunna",
                "heading_level": 2,
                "children": [
                    {
                        "block_type": "paragraph",
                        "content": "The Arabic term *Sunna*, according to which Sunnis are named, is old and roots in pre-Islamic language. It was used for traditions which a majority of people followed. The term got greater political significance after the murder of the third [[Sunni_Caliph|Sunni Caliph|33|wiki]] [[ʿUthmān_ibn_ʿAffān|ʿUthmān ibn ʿAffān|34|wiki]]. It is said [[Malik_al-Ashtar|Mālik al-Aschtar|35|wiki]], a famous follower of [[Ali|ʿAlī ibn Abī Tālib|36|wiki]], encouraged during the [[Battle_of_Siffin|battle of Siffin|37|wiki]] with the expression, Ali's enemy [[Muawiyah_I|Muʿāwiya ibn Abī Sufyān|38|wiki]] kills the *Sunna*. After the battle, it was agreed that \"the righteous *[[Sunnah|Sunnah|39|wiki]]*, the unifying, not the divisive\" (\"*as-sunna al-ʿādila al-ǧāmiʿa ġair al-mufarriqa*\") should be consulted to resolve the conflict. The time when the term *sunna* became the short form for \"[[Sunnah|sunnah|40|wiki]] of the [[Muhammad_in_Islam|prophet|41|wiki]]\" (*sunnat an-nabī*) is still unknown. During the [[Umayyad_Caliphate|Umayyad Caliphate|42|wiki]], several political movements, amongst them the [[Shia|Shia|43|wiki]] and the [[Kharijites|Kharijites|44|wiki]] who rebelled against the formation of the state; led their battles in the name of \"the book of God (*[[Quran|Qur'an|45|wiki]]*) and the *Sunnah* of his Prophet\". During the [[Second_Fitna|second Civil War|46|wiki]] (680–92) the Sunna-term received connotations critical of [[Shia_Islam|Shi'i|47|wiki]] doctrines (*Tashayyu*'). It is recorded by Masrūq ibn al-Adschdaʿ (d. 683), who was a *[[Mufti|Mufti|48|wiki]]* in [[Kufa|Kufa|49|wiki]], a need to love the first two caliphs [[Abū_Bakr|Abū Bakr|50|wiki]] and [[ʿUmar_ibn_al-Khaṭṭāb|ʿUmar ibn al-Khaṭṭāb|51|wiki]] and acknowledge their priority (Fadā'il). A disciple of Masrūq, the scholar ash-Shaʿbī (d. between 721 und 729), who first sided with the Shia in Kufa during Civil War, but turned away in disgust by their fanaticism and finally decided to join the umayyad Caliph [[Abd_al-Malik_ibn_Marwan|ʿAbd al-Malik|52|wiki]], popularized the concept of *sunnah*. It is also passed down by asch-Shaʿbī, that he took offensive at the hatred on [[Aisha|ʿĀʾiša bint Abī Bakr|53|wiki]] and considered it a violation of the *[[Sunnah|sunnah|54|wiki]]*."
                    },
                    {
                        "block_type": "paragraph",
                        "content": "The term *Sunna* instead of the longer expression *ahl as-sunna* or *ahl as-sunna wa-l-ǧamāʿa* as a group-name for Sunnis is a relatively young phenomenon. It was probably [[Ibn_Taymiyyah|Ibn Taymiyyah|55|wiki]], who used the short-term for the first time. It was later popularized by [[Pan-Islamism|pan-Islamic|56|wiki]] scholars such as [[Rashid_Rida|Muhammad Rashid Rida|57|wiki]] in his treatise *as-Sunna wa-š-šiʿa au al-Wahhābīya wa-r-Rāfiḍa: Ḥaqāʾiq dīnīya taʾrīḫīya iǧtimaʿīya iṣlaḥīya* (\"The Sunna and the Shia, Or [[Wahhabism|Wahhabism|58|wiki]] and *[[Rafida|Rāfidism|59|wiki]]*: religious history, sociological und reformoriented facts\") published in 1928–29. The term \"*sunna*\" is usually used in Arabic discourse as designation for Sunni Muslims, when they are intended to be contrasted with Shias. The word pair \"Sunnah-Shia\" is also used on Western research literature to denote the Sunni-Shia contrast."
                    }
                ]
            },
            {
                "block_type": "heading",
                "content": "Ahl as-Sunna",
                "heading_level": 2,
                "children": [
                    {
                        "block_type": "paragraph",
                        "content": "One of the earliest supporting documents for *ahl as-sunna* derives from the Basric scholar Muhammad Ibn Siri (d. 728). His is mentioned in the *Sahih* of [[Muslim_ibn_al-Hajjaj|Muslim ibn al-Hajjaj|60|wiki]] quoted with: \"Formerly one did not aksed about the [[Isnad|Isnad|61|wiki]]. But when the *[[Fitna_(word)|fitna|62|wiki]]* started, one said: 'Name us your informants'. One would then respond to them: if they were Sunnah people, you accept their hadith. But if they are people of the [[Bidʻah|Innovations|63|wiki]], the hadith was rejected.\" G.H.A. Juynboll assumed, the term *fitna* in this statement is not related to the first Civil War (665–661) after murder of [[ʿUthmān_ibn_ʿAffān|ʿUthmān ibn ʿAffān|64|wiki]], but the second Civil War (680–692) in which the Islamic community was split into four parties ([[Abd_Allah_ibn_al-Zubayr|Abd Allah ibn al-Zubayr|65|wiki]], the [[Umayyad_dynasty|Umayyads|66|wiki]], the Shia under [[Mukhtar_al-Thaqafi|al-Mukhtār ibn Abī ʿUbaid|67|wiki]] and the Kharijites). The term *ahl sunna* designated in this situation whose, who stayed away from heretic teachings of the different warring parties."
                    },
                    {
                        "block_type": "paragraph",
                        "content": "The term *ahl as-sunna* was always a laudatory designation. [[Abu_Hanifa|Abu Hanifa|68|wiki]] (d. 769), who sympathized with [[Murdshia|Murdshia|69|wiki]], insisted that this were \"righteous people and people of the Sunnah\" (*ahl al-ʿadl wa-ahl as-sunna*). According to [[Josef_van_Ess|Josef van Ess|70|wiki]] this term did not mean more than \"honorable and righteous believing people\". Among Hanafits the designation *ahl as-sunna* and *ahl al-ʿadl* (people of the righteous) remained interchangeable for a long time. Thus the Hanafite Abū l-Qāsim as-Samarqandī (d. 953), who composed a catechism for the [[Samanides|Samanides|71|wiki]], used sometimes one expression and sometimes another for his own group."
                    },
                    {
                        "block_type": "paragraph",
                        "content": "Singular to *ahl as-sunna* was *ṣāḥib sunna* (adherent to the sunnah). This expression was used for example by [[Ibn_al-Mubarak|ʿAbdallāh ibn al-Mubārak|72|wiki]] (d. 797) for a person, who distances himself from the teachings of shia, kharijites, qadarites and murdajites. In addition, the [[Arabic_nouns_and_adjectives|Nisba|73|wiki]] adjective *sunnī* was also used for the individual person. Thus it has been recorded, the Kufic scholar of the Quran Abu Bakr ibn'auyash (d. 809) was asked, how he was a \"sunni\". He responded the following: \"The one who, when the heresies are mentioned, doesn't get excited about any of them.\" The andalisian scholar [[Ibn_Hazm|ibn Hazm|74|wiki]] (d. 1064) taught later, that whose who confess to Islam can be divided into four groups: *ahl as-sunna*, [[Mutazilites|Mutazilites|75|wiki]], Murdschiiten, Schiiten und Charidschiten. The Muʿtazilites replaced the Qadarites here."
                    },
                    {
                        "block_type": "paragraph",
                        "content": "In the 9th century, one started to extent the term *ahl as-sunna* with further positive additions. Abu l-Hasan al-Ashari used for his own group expressions like *ahl as-sunna wa-l-istiqāma* (\"people of Sunna and Straightness\"), *ahl as-sunna wa-l-ḥadīṯ* (\"people of Sunnah and of the Hadith\") or *ahl al-ḥaqq wa-s-sunna* (\"people of truth and of the Sunnah\")."
                    }
                ]
            },
            {
                "block_type": "heading",
                "content": "Ahl as-Sunna wa-l-jama",
                "heading_level": 2,
                "children": [
                    {
                        "block_type": "paragraph",
                        "content": "When the expression 'ahl as-sunna wal-jama' appeared for the first time, is not entirely clear. The Abbasite Caliph [[Al-Ma'mūn|Al-Ma'mūn|76|wiki]] (reigned 813–33) criticized in his Miha-edict a group of people, who related themselves to the sunnah (*nasabū anfusa-hum ilā s-sunna*) and claimed, they are the \"people of truth, religion and community\" (*ahl al-ḥaqq wa-d-dīn wa-l-ǧamāʿa*). *Sunna* and *jama* are already connected here. As a pair, these terms already appear in the 9th century. It is recorded that the disciple of [[Ahmad_ibn_Hanbal|Ahmad ibn Hanbal|77|wiki]] [[Harb_ibn_Ismail|Harb ibn Ismail|78|wiki]] as Sirjdshani (d. 893) created a writing with the title *as-Sunna wa-l-ǧamāʿa*, to which the Mutazilite [[Abu_l-Qasim_al-Balchi|Abu l-Qasim al-Balchi|79|wiki]] wrote a refutation later. [[Al-Jubba'i|Al-Jubba'i|80|wiki]] (d. 916) tells in his *Kitāb al-Maqālāt*, that Ahmad ibn Hanbal attributed to his students the predicate *sunnī jama* (\"Jammatic Sunnite\"). This indicates that the Hanbalis were the first to use the phrase *ahl as-sunna wal-ǧamāʿa* as a self-designation."
                    },
                    {
                        "block_type": "paragraph",
                        "content": "But also the [[Karramiyya|Karramiyya|81|wiki]] founded by Muhammad ibn Karram (d. 859) referred to the sunnah and community. They passed down for praise of their schoolfounder a hadith, according to which the prophet Muhammad predicted that at the end of times a man named Muhammad ibn Karram will appear, who will restore the sunna and the community (*as-sunna wal-ǧamāʿa*) and take Hidraj from Chorasan to Jerusalem, just how Muhammad himself took a Hidraj from Mecca to Medina. According to the testimony of the transoxanian scholar Abu l-Yusr al-Bazdawi (d. 1099) the Kullabites (followers of the Basrian scholar ibn Kullab (d. 855)) dayed about themselves, that they are among the *ahl as-sunna wal-jama* too."
                    },
                    {
                        "block_type": "paragraph",
                        "content": "Abu l-Hasan al-Ashari used the expression *ahl as-sunna wal-jama* rarely, and preferred another combination. Later Asharites like al-Isfaranini (d. 1027) nad Abd al-Qahir al-Baghdadi (d. 1078) used the expression *ahl as-sunna wal-jama* too and used them in their works to designate the teachings of their own school. According to al-Bazdawi all Asharites in his time said they belong to the *ahl as-sunna wal-jama*. During this time, the term has been used as a self-designation by the hanafite Maturidites in Transoxiania, used frequently by [[Abu_al-Layth_al-Samarqandi|Abu al-Layth al-Samarqandi|82|wiki]] (d. 983), Abu Schakur as Salimi (d. 1086) and al-Bazdawi himself. They used the term as a contrast from their enemies among them Hanafites in the West, who have been followers of the Mutazilites. Al-Bazdawī also contrasted the *ahl as-sunna wal-jama*' with *ahl-al-ḥadīṯ*, \"because they would adhere to teachings contrary to the Quran\"."
                    },
                    {
                        "block_type": "paragraph",
                        "content": "According to [[Al-Muqaddasī|Schams ad-Dīn al-Maqdisī|83|wiki]] (end of the 10th century) was the expression *ahl as-sunna wal-jama* a laudatory term during his time, similar to *ahl al-ʿadl wa-t-tauḥīd* (\"people of righteousness and Divine Unity\"), which was used for Mutazilites or generally designations like [[Mu'min|Mu'min|84|wiki]]ūn (\"Believer\") oraṣḥāb al-hudā (\"people of guidance\") for Muslims, who has been seen as rightoues believers. Since the expression *ahl as-sunna wa-l-jama* was used with a demand on rightoues belief, it was used in academic researches translated as \"orthodox\"."
                    },
                    {
                        "block_type": "paragraph",
                        "content": "There are different opinions regarding what the term *jama* in the phrase *ahl as-sunna wal-jama* actually means, among Muslim scholars. In the Sunni Creed by [[At-Tahawi|at-Tahawi|85|wiki]] (d. 933), the term *jama* contrasts several times the Arabic term *furqa* (\"Division, sectarianism\"). Thus at-Tahāwī explains that *jama* is considered as true or right (*ḥaqq wa-ṣawāb*) and *furqa* as aberration and punishment (*zaiġ wa-ʿaḏāb*). Ibn Taymiyyah argues, that *jama* as opposite term to *furqa* inherents the meaning of *iǧtimāʿ* (\"Coming together, being together, agreement\"). Furthermore he connects it with the principle of [[Ijma|Ijma|86|wiki]], a third juridical source after the Book (= Quran), and the Sunnah. The Ottoman scholar Muslih ad Din al-Qastallani (d. 1495) held the opinnion that *jama* means \"Path of the [[Sahaba|Sahaba|87|wiki]]\" (*ṭarīqat aṣ-ṣaḥāba*). The modern Indonesian theologican [[Nurcholish_Madjid|Nurcholish Madjid|88|wiki]] (d. 2005) interpreted *jama* as an [[Inclusivism|inclusivistic|89|wiki]] concept: It means a society open for [[Value_pluralism|pluralism|90|wiki]] and dialogue but does not emphasize that much."
                    }
                ]
            }
        ]
    },
    {
        "block_type": "heading",
        "content": "History",
        "heading_level": 1,
        "children": [
            {
                "block_type": "image",
                "img_src": "https://wikipedia.org/wiki/Special:Redirect/file/Kaaba_daylight.png",
                "img_caption": "The Kaaba mosque in Mecca is the largest and most important mosque in the world."
            },
            {
                "block_type": "paragraph",
                "content": "One common mistake is to assume that Sunni Islam represents a normative Islam that emerged during the period after Muhammad's death, and that [[Sufism|Sufism|91|wiki]] and [[Shi'ism|Shi'ism|92|wiki]] developed out of Sunni Islam. This perception is partly due to the reliance on highly ideological sources that have been accepted as reliable historical works, and also because the vast majority of the population is Sunni. Both Sunnism and Shiaism are the end products of several centuries of competition between ideologies. Both sects used each other to further cement their own identities and doctrines."
            },
            {
                "block_type": "paragraph",
                "content": "The first four caliphs are known among Sunnis as the [[Rashidun|Rāshidun|93|wiki]] or \"Rightly-Guided Ones\". Sunni recognition includes the aforementioned [[Abu_Bakr|Abu Bakr|94|wiki]] as the first, [[Umar|Umar|95|wiki]] as the second, [[Uthman|Uthman|96|wiki]] as the third, and [[Ali|Ali|97|wiki]] as the fourth. Sunnis recognised different rulers as the [[Caliph|caliph|98|wiki]], though they did not include anyone in the list of the rightly guided ones or *Rāshidun* after the murder of Ali, until the caliphate was constitutionally abolished in [[Turkey|Turkey|99|wiki]] on 3 March 1924."
            },
            {
                "block_type": "heading",
                "content": "Transition of caliphate into dynastic monarchy of Banu Umayya",
                "heading_level": 2,
                "children": [
                    {
                        "block_type": "paragraph",
                        "content": "The seeds of metamorphosis of caliphate into kingship were sown, as the second caliph Umar had feared, as early as the regime of the third caliph Uthman, who appointed many of his kinsmen from his clan [[Banu_Umayya|Banu Umayya|100|wiki]], including [[Marwan_I|Marwān|101|wiki]] and [[Al-Walid_ibn_Uqba|Walid bin Uqba|102|wiki]] on important government positions, becoming the main cause of turmoil resulting in his murder and the ensuing infighting during Ali's time and rebellion by [[Muawiyah_I|Muāwiya|103|wiki]], another of Uthman's kinsman. This ultimately resulted in the establishment of firm dynastic rule of [[Banu_Umayya|Banu Umayya|104|wiki]] after [[Husayn_ibn_Ali|Husain|105|wiki]], the younger son of Ali from [[Fatima_bint_Muhammad|Fātima|106|wiki]], was killed at the [[Battle_of_Karbala|Battle of Karbalā|107|wiki]]. The rise to power of Banu Umayya, the Meccan tribe of elites who had vehemently opposed Muhammad under the leadership of [[Abu_Sufyan_ibn_Harb|Abu Sufyān|108|wiki]], Muāwiya's father, right up to the [[Conquest_of_Mecca|conquest of Mecca|109|wiki]] by Muhammad, as his successors with the accession of Uthman to caliphate, replaced the egalitarian society formed as a result of Muhammad's revolution to a society stratified between haves and have-nots as a result of [[Nepotism|nepotism|110|wiki]], and in the words of El-Hibri through \"the use of religious charity revenues (*[[Zakat|zakāt|111|wiki]]*) to subsidise family interests, which Uthman justified as *'al-sila* ' (pious filial support)\". Ali, during his rather brief regime after Uthman maintained austere life style and tried hard to bring back the egalitarian system and supremacy of law over the ruler idealised in Muhammad's message, but faced continued opposition, and wars one after another by [[Aisha|Aisha|112|wiki]]-[[Talhah|Talhah|113|wiki]]-[[Zubayr_ibn_al-Awwam|Zubair|114|wiki]], by Muāwiya and finally by the [[Kharjites|Khārjites|115|wiki]]. After he was murdered his followers immediately elected [[Hasan_ibn_Ali|Hasan ibn Ali|116|wiki]] his elder son from Fātima to succeed him. Hasan shortly afterward signed a treaty with [[Muāwiya|Muāwiya|117|wiki]] relinquishing power in favour of the latter, with a condition inter alia, that one of the two who will outlive the other will be the caliph, and that this caliph will not appoint a successor but will leave the matter of selection of the caliph to the public. Subsequently, Hasan was poisoned to death and Muawiya enjoyed unchallenged power. Dishonouring his treaty with Hasan, he nominated his son [[Yazid_I|Yazid|118|wiki]] to succeed him. Upon Muāwiya's death, [[Yazid|Yazid|119|wiki]] asked Husain, the younger brother of Hasan, Ali's son and Muhammad's grandson, to give his allegiance to Yazid, which he plainly refused. His caravan was cordoned by Yazid's army at Karbalā and he was killed with all his male companions – total 72 people, in a day long [[Battle_of_Karbala|battle|120|wiki]] after which Yazid established himself as a sovereign, though strong public uprising erupted after his death against his dynasty to avenge the massacre of Karbalā, but [[Banu_Umayya|Banu Umayya|121|wiki]] were able to quickly suppress them all and ruled the Muslim world, till they were finally overthrown by [[Banu_Abbas|Banu Abbās|122|wiki]]."
                    }
                ]
            },
            {
                "block_type": "heading",
                "content": "Caliphate and the dynastic monarchy of Banu Abbās",
                "heading_level": 2,
                "children": [
                    {
                        "block_type": "paragraph",
                        "content": "The rule of and \"caliphate\" of Banu Umayya came to an end at the hands of Banu Abbās a branch of Banu Hāshim, the tribe of Muhammad, only to usher another dynastic monarchy styled as caliphate from 750 CE. This period is seen formative in Sunni Islam as the founders of the four schools viz, [[Abu_Hanifa|Abu Hanifa|123|wiki]], [[Malik_ibn_Anas|Malik ibn Anas|124|wiki]], [[Shafi'i|Shāfi'i|125|wiki]] and [[Ahmad_ibn_Hanbal|Ahmad bin Hanbal|126|wiki]] all practised during this time, so also did [[Jafar_al_Sadiq|Jafar al Sādiq|127|wiki]] who elaborated the doctrine of [[Imamate|imāmate|128|wiki]], the basis for the Shi'a religious thought. There was no clearly accepted formula for determining succession in the Abbasid caliphate. Two or three sons or other relatives of the dying caliph emerged as candidates to the throne, each supported by his own party of supporters. A trial of strength ensued and the most powerful party won and expected favours of the caliph they supported once he ascended the throne. The caliphate of this dynasty ended with the death of the Caliph al-Ma'mun in 833 CE, when the period of Turkish domination began."
                    }
                ]
            },
            {
                "block_type": "heading",
                "content": "Sunni Islam in the contemporary era",
                "heading_level": 2,
                "children": [
                    {
                        "block_type": "image",
                        "img_src": "https://wikipedia.org/wiki/Special:Redirect/file/SA_Blue_Mosque.jpg",
                        "img_caption": "Sultan Salahuddin Abdul Aziz Mosque in Shah Alam, Selangor, Malaysia."
                    },
                    {
                        "block_type": "paragraph",
                        "content": "The fall, at the end of [[World_War_I|World War I|129|wiki]] of the [[Ottoman_Empire|Ottoman Empire|130|wiki]], the biggest Sunni empire for six centuries, brought the caliphate to an end. This resulted in Sunni protests in far off places including the [[Khilafat_Movement|Khilafat Movement|131|wiki]] in [[India|India|132|wiki]], which was later on upon gaining independence from Britain divided into Sunni dominated [[Pakistan|Pakistan|133|wiki]] and secular India. Pakistan, the most populous Sunni state at its dawn, was later [[Bangladesh_Independence_War|partitioned|134|wiki]] into Pakistan and [[Bangladesh|Bangladesh|135|wiki]]. The [[Abolition_of_the_Caliphate|demise of Ottoman caliphate|136|wiki]] also resulted in the emergence of [[Saudi_Arabia|Saudi Arabia|137|wiki]], a dynastic absolute monarchy that championed the reformist doctrines of [[Muhammad_ibn_Abd_al-Wahhab|Muhammad ibn Abd al-Wahhab|138|wiki]]; the eponym of the [[Wahhabism|Wahhabi movement|139|wiki]]. This was followed by a considerable rise in the influence of the [[Wahhabism|Wahhabi|140|wiki]], *[[Salafi_movement|Salafiyya|141|wiki]]*, [[Islamism|Islamist|142|wiki]] and [[Jihadism|Jihadist|143|wiki]] movements that revived the doctrines of the Hanbali theologian [[Ibn_Taymiyyah|Taqi Al-Din Ibn Taymiyyah|144|wiki]] (1263–1328 C.E/ 661–728 A.H), a fervent advocate of the traditions of the Sunni Imam [[Ahmad_ibn_Hanbal|Ahmad ibn Hanbal|145|wiki]]. The expediencies of [[Cold_war|cold war|146|wiki]] resulted in the radicalisation of Afghan refugees in Pakistan who fought the [[Communist|communist|147|wiki]] regime backed by [[USSR|USSR|148|wiki]] forces in Afghanistan giving birth to the [[Taliban|Taliban movement|149|wiki]]. After the fall of communist regime in [[Afghanistan|Afghanistan|150|wiki]] and the ensuing [[Afghan_Civil_War_(1992–1996)|civil war|151|wiki]], Taliban wrestled power from the various [[Afghan_mujahideen|Mujahidin factions|152|wiki]] in Afghanistan and formed a government under the leadership of [[Mullah_Omar|Mohammed Omar|153|wiki]], who was addressed as the [[Emir|Emir|154|wiki]] of the faithful, an honorific way of addressing the caliph. The Taliban regime was recognised by Pakistan and Saudi Arabia till after [[9/11|9/11|155|wiki]], perpetrated by [[Osama_bin_Laden|Osama bin Laden|156|wiki]] – a Saudi national by birth and harboured by the Taliban – took place, resulting in a [[War_on_terror|war on terror|157|wiki]] launched against the Taliban."
                    },
                    {
                        "block_type": "paragraph",
                        "content": "The sequence of events of the 20th century has led to resentment in some quarters of the Sunni community due to the loss of pre-eminence in several previously Sunni-dominated regions such as the [[Levant|Levant|158|wiki]], [[Mesopotamia|Mesopotamia|159|wiki]], the [[Balkans|Balkans|160|wiki]], the [[North_Caucasus|North Caucasus|161|wiki]] and the [[Indian_sub_continent|Indian sub continent|162|wiki]]. The latest attempt by a radical wing of [[Salafi_jihadism|Salafi-Jihadists|163|wiki]] to re-establish a Sunni caliphate was seen in the emergence of the militant group [[Islamic_State_of_Iraq_and_the_Levant|ISIL|164|wiki]], whose leader [[Abu_Bakr_al-Baghdadi|Abu Bakr al-Baghdadi|165|wiki]] is known among his followers as caliph and *Amir-al-mu'mineen*, \"The Commander of the Faithful\". Jihadism is opposed from within the Muslim community (known as the *[[Ummah|ummah|166|wiki]]* in Arabic) in all quarters of the world as evidenced by turnout of almost 2% of the Muslim population in London protesting against ISIL."
                    },
                    {
                        "block_type": "paragraph",
                        "content": "Following the puritan approach of [[Ibn_Kathir|Ibn Kathir|167|wiki]], [[Muhammad_Rashid_Rida|Muhammad Rashid Rida|168|wiki]], etc. many contemporary *[[Tafsir|Tafsir|169|wiki]]* (exegetic treatises) downplay the earlier significance of [[Isra'iliyyat|Biblical material|170|wiki]] (*Isrā'iliyyāt*). Half of the Arab commentaries reject *Isrā'iliyyāt* in general, while Turkish tafsir usually partly allow referring to Biblical material. Nevertheless, most non-Arabic commentators regard them as useless or not applicable. A direct reference to the [[Israeli–Palestinian_conflict|Israeli–Palestinian conflict|171|wiki]] could not be found. It remains unclear whether the refusal of *Isrā'iliyyāt* is motivated by political discourse or by traditionalist thought alone. The usage of *tafsir'ilmi* is another notable characteristic of modern Sunni tafsir. *Tafsir'ilmi* stands for alleged scientific miracles found in the Qur'an. In short, the idea is that the Qur'an contains knowledge about subjects an author of the 7th century could not possibly have. Such interpretations are popular among many commentators. Some scholars, such as the Commentators of [[Al-Azhar_University|Al-Azhar University|172|wiki]], reject this approach, arguing the Qur'an is a text for religious guidance, not for science and scientific theories that may be disproved later; thus *tafsir'ilmi* might lead to interpreting Qur'anic passages as falsehoods. Modern trends of Islamic interpretation are usually seen as adjusting to a modern audience and purifying Islam from alleged alterings, some of which are believed to be intentional corruptions brought into Islam to undermine and corrupt its message."
                    }
                ]
            }
        ]
    },
    {
        "block_type": "heading",
        "content": "Adherents",
        "heading_level": 1,
        "children": [
            {
                "block_type": "image",
                "img_src": "https://wikipedia.org/wiki/Special:Redirect/file/Islam_by_country.png",
                "img_caption": "Countries with more than 95% Muslim population. \n{{legend|#4a6600|Sunni}}\n{{legend|#66004a|Shias}}\n{{legend|#04161b|Ibadi}}"
            },
            {
                "block_type": "paragraph",
                "content": ""
            },
            {
                "block_type": "paragraph",
                "content": "Sunnis believe the [[Sahabah|companions|173|wiki]] of [[Muhammad|Muhammad|174|wiki]] to be reliable transmitters of Islam, since God and Muhammad accepted their integrity. Medieval sources even prohibit cursing or vilifying them. This belief is based upon prophetic traditions such as one narrated by [[Abdullah,_son_of_Masud|Abdullah, son of Masud|175|wiki]], in which Muhammad said: \"The best of the people are my generation, then those who come after them, then those who come after them.\" Support for this view is also found in the [[Quran|Qur'an|176|wiki]], according to Sunnis. Therefore, [[Hadith|narratives|177|wiki]] of companions are also reliably taken into account for knowledge of the Islamic faith. Sunnis also believe that the companions were [[Mu'min|true believers|178|wiki]] since it was the companions who were given the task of [[History_of_the_Quran|compiling the Qur'an|179|wiki]]."
            },
            {
                "block_type": "paragraph",
                "content": "Sunni Islam does not have a formal hierarchy. Leaders are informal, and gain influence through study to become a scholar of Islamic law (*[[Sharia|sharia|180|wiki]]*) or Islamic theology (*[[Kalam|Kalām|181|wiki]]*). Both religious and political leadership are in principle open to all Muslims. According to the Islamic Center of [[Columbia,_South_Carolina|Columbia|182|wiki]], [[South_Carolina|South Carolina|183|wiki]], anyone with the intelligence and the will can become an Islamic scholar. During Midday Mosque services on Fridays, the congregation will choose a well-educated person to lead the service, known as a Khateeb (one who speaks)."
            },
            {
                "block_type": "paragraph",
                "content": "A study conducted by the *[[Pew_Research_Center|Pew Research Center|184|wiki]]* in 2010 and released January 2011 found that there are 1.62 billion Muslims around the world, and it is estimated over 85–90% are Sunni.<ref name=\"Sunni\">See:"
            },
            {
                "block_type": "list",
                "content": [
                    {
                        "block_type": "list_item",
                        "list_type": "ordered",
                        "marker": "1.",
                        "content": "[Eastern Europe Russia and Central Asia](https://books.google.com/books?id=NI1G_9j1AhcC&pg=PA51) \"some 80% of the worlds Muslims are Sunni\""
                    },
                    {
                        "block_type": "list_item",
                        "list_type": "ordered",
                        "marker": "2.",
                        "content": "[Sue Hellett;U.S. should focus on sanctions against Iran](https://web.archive.org/web/20120317195234/http://www.galesburg.com/newsnow/x917961022/Sue-Hulett-U-S-should-focus-on-sanctions-against-Iran) \"Sunnis make up over 75 percent of the world's Muslim population\""
                    },
                    {
                        "block_type": "list_item",
                        "list_type": "ordered",
                        "marker": "3.",
                        "content": "[Iran, Israel and the United States](https://books.google.com/books?id=nVcmKRyID2EC&pg=PA15) \"Sunni, accounts for over 75% of the Islamic population\""
                    },
                    {
                        "block_type": "list_item",
                        "list_type": "ordered",
                        "marker": "4.",
                        "content": "[A dictionary of modern politics](https://books.google.com/books?id=qHXbGOUuF9YC&pg=PA252) \"probably 80% of the worlds Muslims are Sunni\""
                    },
                    {
                        "block_type": "list_item",
                        "list_type": "ordered",
                        "marker": "5.",
                        "content": "[Sunni Islam: Oxford Bibliographies Online Research Guide](https://books.google.com/books?id=D5_N97bAiJ0C&pg=PA3) \"Sunni Islam is the dominant division of the global Muslim community, and throughout history it has made up a substantial majority (85 to 90 percent) of that community.\""
                    }
                ]
            },
            {
                "block_type": "list",
                "content": [
                    {
                        "block_type": "list_item",
                        "list_type": "ordered",
                        "marker": "1.",
                        "content": "[Sunni Islam: Oxford Bibliographies Online Research Guide](https://books.google.com/books?id=D5_N97bAiJ0C&pg=PA3) \"Sunni Islam is the dominant division of the global Muslim community, and throughout history it has made up a substantial majority (85 to 90 percent) of that community.\""
                    }
                ]
            },
            {
                "block_type": "list",
                "content": [
                    {
                        "block_type": "list_item",
                        "list_type": "ordered",
                        "marker": "1.",
                        "content": "[Sunni Islam: Oxford Bibliographies Online Research Guide](https://books.google.com/books?id=D5_N97bAiJ0C&pg=PA3) \"Sunni Islam is the dominant division of the global Muslim community, and throughout history it has made up a substantial majority (85 to 90 percent) of that community.\""
                    }
                ]
            },
            {
                "block_type": "list",
                "content": [
                    {
                        "block_type": "list_item",
                        "list_type": "ordered",
                        "marker": "1.",
                        "content": "[Sunni Islam: Oxford Bibliographies Online Research Guide](https://books.google.com/books?id=D5_N97bAiJ0C&pg=PA3) \"Sunni Islam is the dominant division of the global Muslim community, and throughout history it has made up a substantial majority (85 to 90 percent) of that community.\""
                    }
                ]
            },
            {
                "block_type": "list",
                "content": [
                    {
                        "block_type": "list_item",
                        "list_type": "ordered",
                        "marker": "1.",
                        "content": "[Sunni Islam: Oxford Bibliographies Online Research Guide](https://books.google.com/books?id=D5_N97bAiJ0C&pg=PA3) \"Sunni Islam is the dominant division of the global Muslim community, and throughout history it has made up a substantial majority (85 to 90 percent) of that community.\""
                    }
                ]
            },
            {
                "block_type": "heading",
                "content": "Three group doctrines",
                "heading_level": 2,
                "children": [
                    {
                        "block_type": "paragraph",
                        "content": "Regarding the question which dogmatic tendencies are to be assigned to Sunnism, there is no agreement among Muslim scholars. Since the early modern period, is the idea that a total of three groups belong to the Sunnis: 1. those named after [[Al-Ash'ari|Abu l-Hasan al-Aschʿari|185|wiki]] (d. 935) [[Ash'ari|Ashʿarites|186|wiki]], 2. those named after [[Abu_Mansur_al-Maturidi|Abu Mansur al-Maturidi|187|wiki]] (d. 941) named [[Maturidi|Maturidites|188|wiki]] and 3. a differently named third group, which is traditionalistic-oriented and rejects the rational discourse of [[Kalām|Kalām|189|wiki]] advocated by the Maturidites and Ashʿarites. The Syrian scholar ʿAbd al-Baqi Ibn Faqih Fussa (d. 1661) calls this third traditionalist group the Hanbalites. The late Ottoman thinker İsmail Hakkı İzmirli (d. 1946), who agreed to dividing Sunnis into these three groups, called the traditionalist group [[Salafism|Salafiyya|190|wiki]], but also used *Athariyya* as an alternative term. For the Maturidiyya he gives *Nasafīyya* as a possible alternative name. Another used for the traditionalist-oriented group is \"people of [[Hadith|Hadith|191|wiki]]\" (*ahl al-ḥadīṯ*). It is used, for example, in the final document of the [[2016_international_conference_on_Sunni_Islam_in_Grozny|Grozny Conference|192|wiki]]. Only those \"people of the Hadith\" are assigned to Sunnism who practice *[[Tafwid|tafwīḍ|193|wiki]]*, i.e. who refrain from interpreting the ambiguous statements of the Quran."
                    },
                    {
                        "block_type": "heading",
                        "content": "Ash'ari",
                        "heading_level": 3,
                        "children": [
                            {
                                "block_type": "paragraph",
                                "content": "Founded by [[Abu_al-Hasan_al-Ash'ari|Abu al-Hasan al-Ash'ari|194|wiki]] (873–935). This [[Theological_school|theological school|195|wiki]] of Aqeedah was embraced by many [[Muslim_scholars|Muslim scholars|196|wiki]] and developed in parts of the Islamic world throughout history; [[Al-Ghazali|al-Ghazali|197|wiki]] wrote on the creed discussing it and agreeing upon some of its principles."
                            },
                            {
                                "block_type": "paragraph",
                                "content": "Ash'ari theology stresses [[Divine_revelation|divine revelation|198|wiki]] over human reason. Contrary to the Mu'tazilites, they say that [[Ethics|ethics|199|wiki]] cannot be derived from human reason, but that God's commands, as revealed in the *Quran* and the *Sunnah* (the practices of Muhammad and his companions as recorded in the traditions, or [[Hadith|hadith|200|wiki]]), are the sole source of all morality and ethics."
                            },
                            {
                                "block_type": "paragraph",
                                "content": "Regarding the [[Nature_of_God|nature of God|201|wiki]] and the divine attributes, the Ash'ari rejected the [[Mu'tazili|Mu'tazili|202|wiki]] position that all Quranic references to God as having real attributes were metaphorical. The Ash'aris insisted that these attributes were as they \"best befit His Majesty\". The Arabic language is a wide language in which one word can have 15 different meanings, so the Ash'aris endeavor to find the meaning that best befits God and is not contradicted by the Quran. Therefore, when God states in the Quran, \"He who does not resemble any of His creation\", this clearly means that God cannot be attributed with body parts because He created body parts. Ash'aris tend to stress divine [[Omnipotence|omnipotence|203|wiki]] over human free will and they believe that the Quran is eternal and uncreated."
                            }
                        ]
                    },
                    {
                        "block_type": "heading",
                        "content": "Maturidi",
                        "heading_level": 3,
                        "children": [
                            {
                                "block_type": "paragraph",
                                "content": "Founded by [[Abu_Mansur_al-Maturidi|Abu Mansur al-Maturidi|204|wiki]] (d. 944), the Maturidiyyah was the major tradition in [[Central_Asia|Central Asia|205|wiki]] based on [[Hanafi|Hanafi|206|wiki]]-law. It is more influenced by Persian interpretations of Islam and less on the traditions established within Arabian culture. In contrast to the traditionalistic approach, Maturidism allows to reject [[Hadith|hadiths|207|wiki]] based on reason alone. Nevertheless, revelation remains important to inform humans about that is beyond their intellectual limits, such as the concept of an afterlife. [[Ethics|Ethics|208|wiki]] on the other hand, do not need prophecy or revelation, but can be understood by reason alone. One of the tribes, the [[Seljuk_Turks|Seljuk Turks|209|wiki]], migrated to [[Turkey|Turkey|210|wiki]], where later the [[Ottoman_Empire|Ottoman Empire|211|wiki]] was established. Their preferred school of law achieved a new prominence throughout their whole empire although it continued to be followed almost exclusively by followers of the [[Hanafi|Hanafi|212|wiki]] school while followers of the [[Shafi|Shafi|213|wiki]] and [[Maliki|Maliki|214|wiki]] schools within the empire followed the Ash'ari and Athari schools of thought. Thus, wherever can be found [[Hanafi|Hanafi|215|wiki]] followers, there can be found the [[Maturidi|Maturidi|216|wiki]] creed."
                            }
                        ]
                    },
                    {
                        "block_type": "heading",
                        "content": "Athari",
                        "heading_level": 3,
                        "children": [
                            {
                                "block_type": "paragraph",
                                "content": "Traditionalist or Athari theology is a movement of [[Islam|Islamic|217|wiki]] scholars who reject rationalistic Islamic theology (*[[Kalam|kalam|218|wiki]]*) in favor of strict textualism in interpreting the *[[Quran|Qur'an|219|wiki]]* and *[[Sunnah|sunnah|220|wiki]]*. The name derives from \"tradition\" in its technical sense as translation of the Arabic word *[[Hadith|hadith|221|wiki]]*. It is also sometimes referred to as *athari* as by [[Traditionalist_Theology_(Islam)|several other names|222|wiki]]."
                            },
                            {
                                "block_type": "paragraph",
                                "content": "Adherents of traditionalist theology believe that the *[[Zahir_(Islam)|zahir|223|wiki]]* (literal, apparent) meaning of the *Qur'an* and the [[Hadith|hadith|224|wiki]] have sole authority in matters of belief and law; and that the use of rational disputation is forbidden even if it verifies the truth. They engage in a literal reading of the *Qur'an*, as opposed to one engaged in *[[Ta'wil|ta'wil|225|wiki]]* (metaphorical interpretation). They do not attempt to conceptualize the meanings of the *Qur'an* rationally, and believe that their realities should be consigned to God alone (*[[Tafwid|tafwid|226|wiki]]*). In essence, the text of the Qur'an and Hadith is accepted without asking \"how\" or \"[[Bi-la_kaifa|Bi-la kaifa|227|wiki]]\"."
                            },
                            {
                                "block_type": "paragraph",
                                "content": "Traditionalist theology emerged among scholars of hadith who eventually coalesced into a movement called *[[Ahl_al-Hadith|ahl al-hadith|228|wiki]]* under the leadership of [[Ahmad_ibn_Hanbal|Ahmad ibn Hanbal|229|wiki]]. In matters of faith, they were pitted against [[Mu'tazilites|Mu'tazilites|230|wiki]] and other theological currents, condemning many points of their doctrine as well as the rationalistic methods they used in defending them. In the 10th century AD [[Al-Ash'ari|al-Ash'ari|231|wiki]] and [[Al-Maturidi|al-Maturidi|232|wiki]] found a middle ground between Mu'tazilite rationalism and [[Hanbalite|Hanbalite|233|wiki]] literalism, using the rationalistic methods championed by Mu'tazilites to defend most tenets of the traditionalist doctrine. Although the mainly Hanbali scholars who rejected this synthesis were in the minority, their emotive, narrative-based approach to faith remained influential among the urban masses in some areas, particularly in [[Abbasid_Caliphate|Abbasid|234|wiki]] [[Baghdad|Baghdad|235|wiki]]."
                            },
                            {
                                "block_type": "paragraph",
                                "content": "While [[Ash'arism|Ash'arism|236|wiki]] and [[Maturidism|Maturidism|237|wiki]] are often called the Sunni \"orthodoxy\", traditionalist theology has thrived alongside it, laying rival claims to be the orthodox Sunni faith. In the modern era, it has had a disproportionate impact on Islamic theology, having been appropriated by [[Wahhabi|Wahhabi|238|wiki]] and other traditionalist [[Salafi|Salafi|239|wiki]] currents and have spread well beyond the confines of the [[Hanbali|Hanbali|240|wiki]] school of law."
                            }
                        ]
                    }
                ]
            },
            {
                "block_type": "heading",
                "content": "Narrow definition",
                "heading_level": 2,
                "children": [
                    {
                        "block_type": "paragraph",
                        "content": "There were also Muslim scholars who wanted to limit the Sunni term to the *[[Ash'ari|Ash'arites|241|wiki]]* and *[[Maturidi|Māturīdites|242|wiki]]* alone. For example, Murtadā az-Zabīdī (d. 1790) wrote in his commentary on [[Al-Ghazali|al-Ghazalis|243|wiki]] \"Iḥyāʾ ʿulūm ad-dīn\": \"When (sc. The term)\" *ahl as-sunna wal jamaʿa* is used, the Ashʿarites and Māturīdites are meant. This position was also taken over by the Egyptian Fatwa Office in July 2013. In [[Ottoman_Empire|Ottoman|244|wiki]] times, many efforts were made to establish a good harmony between the teachings of the Ashʿarīya and the Māturīdīya. Finally, there were also scholars who regarded the Ashʿarites alone as Sunnis. For example, the Moroccan Sufi Ahmad ibn ʿAdschiba (d. 1809) stated in his commentary on [[Al-Fatiha|Fatiha|245|wiki]]: \"As far as the Sunnis are concerned, it is the Ashʿarites and those who follow in their correct belief.\""
                    },
                    {
                        "block_type": "paragraph",
                        "content": "Conversely, there were also scholars who excluded the Ashʿarites from Sunnism. The Andalusian scholar [[Ibn_Hazm|Ibn Hazm|246|wiki]] (d. 1064) said that Abu l-Hasan al-Ashʿarī belonged to the [[Murji'a|Murji'a|247|wiki]], namely those who were particularly far removed from the Sunnis in terms of faith. Twentieth-century [[Syrians|Syrian|248|wiki]]-[[Albanians|Albanian|249|wiki]] Athari [[Salafi_movement|Salafi|250|wiki]] theologian [[Muhammad_Nasiruddin_al-Albani|Muhammad Nasir al-Din al-Albani|251|wiki]] rejected extremism in excluding [[Ash'ari|Ash'aris|252|wiki]] from Sunni Islam. He believed that despite that their fundamental differences from Atharis, not every Ash'ari is to be excluded from *Ahl al-Sunna wal Jama'ah*, unless they openly disapprove of the doctrines of the *[[Salaf|Salaf|253|wiki]]* (*mad'hab as-Salaf*). According to Albani:\"'I do not share [the view of] some of the noble scholars of the past and present that we say about a group from the [many] Islamic groups that it is not from Ahlus-Sunnah due to its deviation in one issue or another... as for whether the Ash’aris or the Maaturidis are from Ahlus-Sunnah wal-Jamaa’ah, I say that they are from Ahlus-Sunnah wal-Jamaa’ah in many things related to aqidah but in other aqidah issues they have deviated away from Ahlus-Sunnah wal-Jamaa’ah.. I don't hold that we should say that they are not from Ahlus-Sunnah wal-Jamaa’ah whatsoever'\""
                    }
                ]
            },
            {
                "block_type": "heading",
                "content": "Sunnism in general and in a specific sense",
                "heading_level": 2,
                "children": [
                    {
                        "block_type": "paragraph",
                        "content": "The [[Hanbalism|Hanbali|254|wiki]] scholar [[Ibn_Taymiyyah|Ibn Taymiyyah|255|wiki]] (d. 1328) distinguished in his work *Minhāj as-sunna* between Sunnis in the general sense (*ahl as-unna al-ʿāmma*) and Sunnis in the special sense (*ahl as-sunna al-ḫāṣṣa*). Sunnis in the general sense are all Muslims who recognize the caliphate of the three caliphs ([[Abū_Bakr|Abū Bakr|256|wiki]], [[ʿUmar_ibn_al-Khaṭṭāb|ʿUmar ibn al-Khaṭṭāb|257|wiki]] and [[ʿUthmān_ibn_ʿAffān|ʿUthmān ibn ʿAffān|258|wiki]]). In his opinion, this includes all Islamic groups except the Shiite [[Rafida|Rafidites|259|wiki]]. Sunnis in the special sense are only the \"people of the hadith\" (*ahl al-ḥadīṯ*)."
                    },
                    {
                        "block_type": "paragraph",
                        "content": "İsmail Hakkı İzmirli, who took over the distinction between a broader and narrower circle of Sunnis from Ibn Taimiya, said that [[Ibn_Kullab|Kullabiyya|260|wiki]] and the Ashʿarīyya are Sunnis in the general sense, while the [[Salafism|Salafiyya|261|wiki]] represent Sunnis in the specific sense. About the Maturidiyya he only says that they are closer to the Salafiyya than the Ashʿariyya because they excel more in [[Fiqh|Fiqh|262|wiki]] than in [[Kalām|Kalām|263|wiki]]. The [[Saudi_Arabia|Saudi scholar|264|wiki]] [[Muhammad_ibn_al-Uthaymeen|Muhammad Ibn al-ʿUthaimin|265|wiki]] (d. 2001), who like Ibn Taimiya differentiated between Sunnis in general and special senses, also excluded the Asharites from the circle of Sunnis in the special sense and took the view that only the pious ancestors (*as-salaf aṣ-ṣāliḥ*) who have agreed on the Sunnah belonged to this circle."
                    }
                ]
            },
            {
                "block_type": "heading",
                "content": "Classification of the Muʿtazila",
                "heading_level": 2,
                "children": [
                    {
                        "block_type": "paragraph",
                        "content": "The [[Muʿtazila|Muʿtazilites|266|wiki]] are usually not regarded as Sunnis. [[Ibn_Hazm|Ibn Hazm|267|wiki]], for example, contrasted them with the Sunnis as a separate group in his heresiographic work *al-Faṣl fi-l-milal wa-l-ahwāʾ wa-n-niḥal*. In many medieval texts from the Islamic East, the *Ahl as-Sunna* are also differentiated to the Muʿtazilites. In 2010 the Jordanian *[[Fatwa|fatwa|268|wiki]]* office ruled out in a [[Fatwa|fatwa|269|wiki]] that the Muʿtazilites, like the Kharijites, represent a doctrine that is contrary to Sunnism. Ibn Taymiyya argued that the Muʿtazilites belong to the Sunnis in the general sense because they recognize the caliphate of the first three caliphs."
                    }
                ]
            },
            {
                "block_type": "heading",
                "content": "Mysticism",
                "heading_level": 2,
                "children": [
                    {
                        "block_type": "paragraph",
                        "content": "There is broad agreement that the [[Sufism|Sufis|270|wiki]] are also part of Sunnism. This view can already be found in the [[Shafiʽi_school|Shafi'ite|271|wiki]] scholar [[Abu_Mansur_al-Baghdadi|Abu Mansur al-Baghdadi|272|wiki]] (d. 1037). In his [[Heresiography|heresiographical|273|wiki]] work  al-Farq baina l-firaq  he divided the Sunnis into eight different categories (*aṣnāf*) of people: 1. the theologians and [[Kalam|Kalam|274|wiki]] Scholars, 2. the [[Fiqh|Fiqh|275|wiki]] scholars, 3. the traditional and [[Hadith|Hadith|276|wiki]] scholars, 4. the [[Adab_(Islam)|Adab|277|wiki]] and language scholars, 5. the [[Koran|Koran|278|wiki]] – Scholars, 6. the [[Sufism|Sufi|279|wiki]] ascetics (*az-zuhhād aṣ-ṣūfīya*), 7. those who perform the *[[Ribat|ribat|280|wiki]]* and *[[Jihad|jihad|281|wiki]]* against the enemies of Islam, 8. the general crowd. According to this classification, the Sufis are one of a total of eight groups within Sunnism, defined according to their religious specialization."
                    },
                    {
                        "block_type": "paragraph",
                        "content": "The [[Tunisia|Tunisian|282|wiki]] scholar Muhammad ibn al-Qāsim al-Bakkī (d. 1510) also included the Sufis in Sunnism. He divided the Sunnis into the following three groups according to their knowledge (*istiqrāʾ*): Similarly, [[Murtada_al-Zabidi|Murtadā az-Zabīdī|283|wiki]] stated elsewhere in his commentary on [[Al-Ghazali|Ghazzali's|284|wiki]] *[[The_Revival_of_the_Religious_Sciences|Iḥyāʾ ʿulūm ad-dīn|285|wiki]]* *that the Sunnis consisted of four groups (firaq*), namely the [[Hadith_scholar|hadith scholars|286|wiki]] (''muḥaddiṯhūn), the Sufis, the Ashʿarites and the Māturīdites. ''"
                    },
                    {
                        "block_type": "paragraph",
                        "content": "Some *[[Ulama|ulema|287|wiki]]* wanted to exclude the Sufis from Sunnism. The Yemeni scholar ʿAbbās ibn Mansūr as-Saksakī (d. 1284) explained in his doxographic work  al-Burhān fī maʿrifat ʿaqāʾid ahl al-adyān  (\"The evidence of knowledge of the beliefs of followers of different religions\") about the Sufis: \"They associate themselves with the Sunnis, but they do not belong to them, because they contradict them in their beliefs, actions and teachings.\" That is what distinguishes the Sufis from Sunnis according to as-Saksakī their orientation to the hidden inner meaning of the *Qur'an* and the *Sunnah*. In this, he said, they resemble the [[Batiniyya|Bātinites|288|wiki]]. According to the final document of the Grozny Conference, only those Sufis are to be regarded as Sunnis who are \"people of pure Sufism\" (*ahl at-taṣauwuf aṣ-ṣāfī*) in the knowledge, ethics and purification of the interior, according to [[Tariqa|Method|289|wiki]] as practiced by [[Junayd_of_Baghdad|al-Junaid Al- Baghdadi|290|wiki]] and the \"Imams of Guidance\" (*aʾimma al-hudā*) who followed his path."
                    },
                    {
                        "block_type": "paragraph",
                        "content": "In the 11th century, Sufism, which had previously been a less \"codified\" trend in Islamic piety, began to be \"ordered and crystallized\" into *[[Tariqa|Tariqahs|291|wiki]]* (orders) which have continued until the present day. All these orders were founded by a major Sunni Islamic [[Saint_(Islamic)|saint|292|wiki]], and some of the largest and most widespread included the [[Qadiriyya|Qadiriyya|293|wiki]] (after [[Abdul-Qadir_Gilani|Abdul-Qadir Gilani|294|wiki]] [d. 1166]), the [[Rifa'i|Rifa'iyya|295|wiki]] (after [[Ahmed_al-Rifa'i|Ahmed al-Rifa'i|296|wiki]] [d. 1182]), the [[Chishti_Order|Chishtiyya|297|wiki]] (after [[Moinuddin_Chishti|Moinuddin Chishti|298|wiki]] [d. 1236]), the [[Shadiliyya|Shadiliyya|299|wiki]] (after [[Abul_Hasan_ash-Shadhili|Abul Hasan ash-Shadhili|300|wiki]] [d. 1258]), and the [[Naqshbandi|Naqshbandiyya|301|wiki]] (after [[Baha-ud-Din_Naqshband_Bukhari|Baha-ud-Din Naqshband Bukhari|302|wiki]] [d. 1389]). Contrary to popular [[Orientalism|Orientalist|303|wiki]] depictions, neither the founders of these orders nor their followers considered themselves to be anything other than orthodox Sunni Muslims, Many of the most eminent defenders of Islamic orthodoxy, such as [[Abdul_Qadir_Gilani|'Abd al-Qadir Jilani|304|wiki]], [[Al-Ghazali|Al-Ghazali|305|wiki]], Sultan Ṣalāḥ ad-Dīn Al-Ayyubi ([[Saladin|Saladin|306|wiki]]) were connected with Sufism.\" The [[Salafi|Salafi|307|wiki]] and [[Wahhabi|Wahhabi|308|wiki]] strands of Sunnism do not accept many mystical practices associated with the contemporary Sufi orders."
                    },
                    {
                        "block_type": "list",
                        "content": [
                            {
                                "block_type": "list_item",
                                "list_type": "ordered",
                                "marker": "1.",
                                "content": "1) the people of [[Hadith|Hadith|309|wiki]] (*[[Ahl_al-Hadith|ahl al-ḥadīṯh|310|wiki]]*): Their principles are based on the hearing-based evidence, namely [[Quran|the Book|311|wiki]] (*Qur'an*), the *[[Sunnah|Sunnah|312|wiki]]* and the *[[Ijma|Ijmāʿ|313|wiki]]* (consensus)."
                            },
                            {
                                "block_type": "list_item",
                                "list_type": "ordered",
                                "marker": "2.",
                                "content": "2) The people of theory and the intellectual trade (*ahl an-naẓar wa-ṣ-ṣināʿa al-fikrīya*): They include the [[Ash'ari|Ashʿarites|314|wiki]] and the [[Hanafi|Hanafis|315|wiki]], the latter of whom consider [[Abu_Mansur_al-Maturidi|Abū Mansūr al-Māturīdī|316|wiki]] as their master. They agree in the rational principles on all questions where there is no hearing-based evidence, in the hearing-based principles in everything that reason conceives as possible, and in the rational as well as the hearing-based principles in all other questions. They also agree on all dogmatic questions, except for the question of creation (*takwīn*) and the question of *[[Taqlid|Taqlīd|317|wiki]]*."
                            },
                            {
                                "block_type": "list_item",
                                "list_type": "ordered",
                                "marker": "3.",
                                "content": "3) the people of feeling and revelation (*ahl al-wiǧdān wa-l-kašf*): These are the [[Sufism|Sufis|318|wiki]]. Its principles correspond in the initial stage to the principles of the other two groups, but in the final stage they rely on revelation (*kašf*) and inspiration (*ilhām*)."
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "block_type": "heading",
        "content": "Jurisprudence",
        "heading_level": 1,
        "children": [
            {
                "block_type": "paragraph",
                "content": "Interpreting Islamic law by deriving specific rulings – such as how to pray – is commonly known as [[Fiqh|Islamic jurisprudence|319|wiki]]. The schools of law all have their own particular tradition of interpreting this jurisprudence. As these schools represent clearly spelled out methodologies for interpreting Islamic law, there has been little change in the methodology with regard to each school. While conflict between the schools was often violent in the past, the four Sunni schools recognize each other's validity and they have interacted in legal debate over the centuries."
            },
            {
                "block_type": "heading",
                "content": "Schools",
                "heading_level": 2,
                "children": [
                    {
                        "block_type": "image",
                        "img_src": "https://wikipedia.org/wiki/Special:Redirect/file/Great_Mosque_of_Kairouan_Panorama_-_Grande_Mosqu%C3%A9e_de_Kairouan_Panorama.jpg",
                        "img_caption": "The Great Mosque of Kairouan (also known as the Mosque of Uqba) in the city of Kairouan, Tunisia, was, particularly from the 9th to 11th century, an important center of Islamic learning with an emphasis on the Maliki Madh'hab."
                    },
                    {
                        "block_type": "paragraph",
                        "content": "There are many intellectual traditions within the field of *[[Sharia|Shari'ah|320|wiki]]* ([[Islamic_law|Islamic law|321|wiki]]), often referred to as *[[Madhhab|Madh'habs|322|wiki]]* (legal schools). These varied traditions reflect differing viewpoints on some laws and obligations within Islamic law. While one school may see a certain act as a religious obligation, another may see the same act as optional. These schools aren't regarded as sects; rather, they represent differing viewpoints on issues that are not considered the core of [[Islamic_belief|Islamic belief|323|wiki]]. Historians have differed regarding the exact delineation of the schools based on the underlying principles they follow."
                    },
                    {
                        "block_type": "paragraph",
                        "content": "Many traditional scholars saw Sunni Islam in two groups: *[[Ahl_al-Ra'y|Ahl al-Ra'y|324|wiki]]*, or \"people of reason\", due to their emphasis on scholarly judgment and discourse; and *[[Ahl_al-Hadith|Ahl al-Hadith|325|wiki]]*, or \"people of traditions\", due to their emphasis on restricting juristic thought to only what is found in scripture. [[Ibn_Khaldun|Ibn Khaldun|326|wiki]] defined the Sunni schools as three: the [[Hanafi|Hanafi|327|wiki]] school representing reason, the [[Ẓāhirī|Ẓāhirīte|328|wiki]] school representing tradition, and a broader, middle school encompassing the [[Shafi'i|Shafi'ite|329|wiki]], [[Maliki|Malikite|330|wiki]] and [[Hanbali|Hanbalite|331|wiki]] schools."
                    },
                    {
                        "block_type": "paragraph",
                        "content": "During the [[Middle_Ages|Middle Ages|332|wiki]], the Mamluk Sultanate ([[Cairo)|Mamluk Sultanate|333|wiki]] in Egypt delineated the acceptable Sunni schools as only [[Hanafi|Hanafi|334|wiki]], [[Maliki|Maliki|335|wiki]], [[Shafi'i|Shafi'i|336|wiki]] and [[Hanbali|Hanbali|337|wiki]], excluding the Ẓāhirī school. The [[Ottoman_Empire|Ottoman Empire|338|wiki]] later reaffirmed the official status of four schools as a reaction to the [[Shia_Islam|Shiite|339|wiki]] character of their ideological and political archrival, the [[Safavid_dynasty|Persian Safavids|340|wiki]]. In the contemporary era, former [[List_of_heads_of_government_of_Sudan|Prime Minister of Sudan|341|wiki]] [[Al-Sadiq_al-Mahdi|Al-Sadiq al-Mahdi|342|wiki]], as well as the [[Amman_Message|Amman Message|343|wiki]] issued by King [[Abdullah_II_of_Jordan|Abdullah II of Jordan|344|wiki]], recognize the Ẓāhirīs and keep the number of Sunni schools at five."
                    }
                ]
            }
        ]
    },
    {
        "block_type": "heading",
        "content": "Pillars of iman",
        "heading_level": 1,
        "children": [
            {
                "block_type": "paragraph",
                "content": "The doctrines of the Sunnis are recorded in various [[Aqida|creeds|345|wiki]], which summarize the most important points in the form of a list in the manner of a [[Catechism|Catechism|346|wiki]]. The individual teaching points differ depending on the author's affiliation to a certain teaching tradition. The most important creeds that explicitly claim to represent the teachings of the Sunnis (*ahl as-sunna wal-jama* or similar) include:"
            },
            {
                "block_type": "paragraph",
                "content": "Most of the mentioned branches testify to six principal articles of faith known as the six pillars of *imān* (Arabic for \"faith\"), which are believed to be essential. These six articles are common that present-day Sunnis agree on, from those who adhere to traditional Sunnism to those who adhere to latter-day movements. Additionally, classical Sunni Islam also outlined numerous other cardinal doctrines since the 8th century, such as the [[Al-Aqidah_al-Tahawiyyah|Creed of Tahāwi|347|wiki]]. Traditionally, these Sunni articles of faith have included the following:"
            },
            {
                "block_type": "paragraph",
                "content": ""
            },
            {
                "block_type": "list",
                "content": [
                    {
                        "block_type": "list_item",
                        "list_type": "ordered",
                        "marker": "1.",
                        "content": "The text traced back to [[Ahmad_ibn_Hanbal|Ahmad ibn Hanbal|348|wiki]], in which he defined \"the characteristics of the believer of the Sunnis\" (*sifat al-Mu'min min ahl as-Sunna wa-l-jama*). The text is handed down in two works in the work *Ṭabaqāt al-Ḥanābila* of the Hanbali Qadi Ibn Abi Yaʿla]] (d. 1131). The first version comes from a treatise on the Sunnah by Ahmad ibn Hanbal's disciple Muhammad ibn Habib al-Andarani, the second is based on Ahmad's disciple Muhammad ibn Yunus al-Sarachhi."
                    },
                    {
                        "block_type": "list_item",
                        "list_type": "ordered",
                        "marker": "2.",
                        "content": "The two creeds of Abu l-Hasan al-Ashʿarī in his works *Maqālāt al-islāmīyīn* and *Kitāb al-Ibāna ʿan uṣūl ad-diyāna*. The former is called the teaching of *ahl al-ḥadīṯ wa-s-sunna*, the latter as the teachings of the *ahl al-ḥaqq wa-s-sunna*."
                    },
                    {
                        "block_type": "list_item",
                        "list_type": "ordered",
                        "marker": "3.",
                        "content": "The confession of the Egyptian Hanafi at-Tahāwī (d. 933), also known under the title  Bayān as-sunna wa-l-ǧamāʿa  (\"Presentation of Sunna and Community\"). It has received frequent comments from the 13th century onward."
                    },
                    {
                        "block_type": "list_item",
                        "list_type": "ordered",
                        "marker": "4.",
                        "content": "The \"Qadiritic Creed\" (*al-iʿtiqād [[Al-Qādir|al-Qādir|349|wiki]]ī*) mentioned in the world chronicle *al-Muntaẓam* by [[Ibn_al-Jschauzī|Ibn al-Jschauzī|350|wiki]] and referring to the Abbasid caliph al-Qādir (d. 1031) is returned. The caliph [[Al-Qa'im_(Abbasids)|al-Qā'im|351|wiki]] is supposed to have read this text, which is shown at the end as the \"Doctrine of the Sunnis\" (*qaul ahl as-sunna wal-jama*), in the year 433 [[Hijri_year|Hijra|352|wiki]] (= 1041/42 AD) which was read in front of a meeting of ascetics and scholars in the caliph's palace."
                    },
                    {
                        "block_type": "list_item",
                        "list_type": "ordered",
                        "marker": "5.",
                        "content": "The creed of [[Al-Ghazālī|al-Ghazālī|353|wiki]] (d. 1111) in his second book of his religious encyclopedia *Iḥyāʾ ʿulūm ad-dīn*. It is headed \"The Sunni Creed in the Two Phrases of the [[Shahāda|Shahāda|354|wiki]]\" (*ʿAqīdat ahl as-sunna fī kalimatai aš-šahāda*) and deals first with the doctrine of God and then the other doctrinal points."
                    },
                    {
                        "block_type": "list_item",
                        "list_type": "ordered",
                        "marker": "6.",
                        "content": "The confession *al-ʿAqīda al-Wāsiṭīya* by Ibn Taimīya (1263–1328), which later received importance especially among the Wahhabis and the Ahl-i Hadīth. It was translated into French by [[Henri_Laoust|Henri Laoust|355|wiki]], by Merlin Swartz into English and by Clemens Wein into German."
                    }
                ]
            },
            {
                "block_type": "list",
                "content": [
                    {
                        "block_type": "list_item",
                        "list_type": "ordered",
                        "marker": "1.",
                        "content": "1) Belief in the [[Oneness_of_God|Oneness of God|356|wiki]]"
                    },
                    {
                        "block_type": "list_item",
                        "list_type": "ordered",
                        "marker": "2.",
                        "content": "2) Belief in the [[Angels_in_Islam|Angels of God|357|wiki]]"
                    },
                    {
                        "block_type": "list_item",
                        "list_type": "ordered",
                        "marker": "3.",
                        "content": "3) Belief in Holy Books"
                    },
                    {
                        "block_type": "list_item",
                        "list_type": "ordered",
                        "marker": "4.",
                        "content": "4) Belief in the [[Prophets_in_Islam|Prophets of God|358|wiki]]"
                    },
                    {
                        "block_type": "list_item",
                        "list_type": "ordered",
                        "marker": "5.",
                        "content": "5) Belief in Resurrection after Death and the [[Day_of_Judgment|Day of Judgment|359|wiki]]"
                    },
                    {
                        "block_type": "list_item",
                        "list_type": "ordered",
                        "marker": "6.",
                        "content": "6) Belief in Preordainment (*[[Qadar|Qadar|360|wiki]]*)"
                    }
                ]
            },
            {
                "block_type": "heading",
                "content": "God",
                "heading_level": 2,
                "children": [
                    {
                        "block_type": "heading",
                        "content": "Unity",
                        "heading_level": 3,
                        "children": [
                            {
                                "block_type": "paragraph",
                                "content": "At the center of the Sunni creed is [[Tawhid|Tawhid|361|wiki]], the belief in the oneness of God. God is a single (*fard*) God, besides whom there is no other deity. He is single (*[[Munfarid|munfarid|362|wiki]]*), has no partner (*šarīk*), no opposite (*nidd*), no counterpart (*maṯīl*) and no adversary (*ḍidd*). He has neither taken a companion nor children, neither conceived nor is he conceived."
                            },
                            {
                                "block_type": "paragraph",
                                "content": "God created everything, the years and times, day and night, light and darkness, the heavens and the earth, all kinds of creatures that are on it, the land and the sea, and everything living, dead and solid. Before he created all of this, he was completely alone, with nothing with him. In contrast to his creation, God has a timeless nature. He is beginningless (*azalī*) because he has existed for all eternity and nothing precedes him, and he is endless (*abadī*) because he continues to exist without interruption for all eternity. He is the first and the last, as it says in the Quran (Sura 57: 3). God brought forth creation not because he needed it, but to demonstrate his power and as the implement his previous will and his primordial speech. God is creator, but has no needs. He does not need food, does not feel lonely and does not keep company with anyone."
                            }
                        ]
                    },
                    {
                        "block_type": "heading",
                        "content": "Transcendence",
                        "heading_level": 3,
                        "children": [
                            {
                                "block_type": "paragraph",
                                "content": "To absolve God of all anthropomorphism, the Qur'anic statements that \"God sat on the throne\" (istawā ʿalā l-ʿarš; Surah 7:54; 20: 5) receive a lot of the Sunni creeds attention. The creed of al-Qādir emphasizes that God did not set himself up on the throne (ʿarš) \"in the manner of the rest of the creatures\" and that he created this throne, although he did not need it. Al-Ghazali's knowledge of the faith states that the \"sitting down\" is free from contact (*mumāssa*) with the throne. It is not the throne that carries God, but the throne and its bearers are carried through the grace of his power. According to al-Ashʿari, the Sunnis confess that God is on his throne, but without asking how. Even if God does not need the throne and what is below, because he spatially occupies everything, including what is above him, the throne and stool (*kursī*) are a reality."
                            }
                        ]
                    },
                    {
                        "block_type": "heading",
                        "content": "Names and attributes",
                        "heading_level": 3,
                        "children": [
                            {
                                "block_type": "paragraph",
                                "content": "The Sunnis confess that the names of God cannot be said to be anything other than God, as Muʿtazilites and Kharijites claim. Rather, they teach that there are correlating attributes (*ṣifāt*) which exist in each of the names of God mentioned in the Quran: God is alive through life (*[[Ḥayāh|ḥayāh|363|wiki]]*), knowing through knowledge (*ʿilm*), mighty through power (*ʿqudra*), wanting through will (*[[Irāda|irāda|364|wiki]]*), hearing through hearing (*samʿ*), seeing through sight (*[[Baṣar|baṣar|365|wiki]]*) and speaking through Speech (*[[Kalām|kalām|366|wiki]]*). The attributes are not identical to God, nor are they anything different from him. Only those attributes are ascribed to God which he ascribed to himself (in the [[Quran|Quran|367|wiki]]) or which his prophet ascribed to him. And every attribute that he or his [[Prophet|prophet|368|wiki]] has ascribed to him is a real attribute, not an attribute [[Majaz|figuratively|369|wiki]]."
                            }
                        ]
                    }
                ]
            },
            {
                "block_type": "heading",
                "content": "Angels and other spirits",
                "heading_level": 2,
                "children": [
                    {
                        "block_type": "image",
                        "img_src": "https://wikipedia.org/wiki/Special:Redirect/file/Siyer-i_Nebi_298a.jpg",
                        "img_caption": "Muhammed accompanied by the archangels Gabriel, Michael, Israfil und Azrael. Turkish Siyer-i-Nebi-work, 1595"
                    },
                    {
                        "block_type": "paragraph",
                        "content": "Sunnis believe in [[Angels_in_Islam|angels|370|wiki]]. God hid the [[Angels|angels|371|wiki]] from the vision of humans, thus they can usually not see them. Just in some special occusations God unveils them for individual humans. Like when the archangel [[Gabriel|Gabriel|372|wiki]] appeared to the prophet [[Muhammad|Muhammad|373|wiki]] one time in his true form with 600 wings, filling the entire horizon and another time when he was among the circles of the Sahaba, in the form of a white clothed traveller."
                    },
                    {
                        "block_type": "paragraph",
                        "content": "[[Angels|Angels|374|wiki]] fulfil duties assigned by God. The [[Angel|angel|375|wiki]] [[Gabriel|Gabriel|376|wiki]] has the mission to transmit God's revelations to chosen Prophets. The [[Angel_Michael|angel Michael|377|wiki]] is assigned over rain and plants. The [[Angel|angel|378|wiki]] [[Israfil|Israfil|379|wiki]] must blow into the trumpet during thunder and the day of resurrection. Furthermore to the angels belong the recording angels, who supervise humans and the angel of death, who takes the [[Ruh|souls|380|wiki]] (lit. spirits) of the inhabitants of the world."
                    },
                    {
                        "block_type": "paragraph",
                        "content": "Unlike the Mutazilites and the Jahmites, the Sunnis believe that [[Iblis|Satan|381|wiki]] whispers doubts to humans and hits them, as the Quran states. But humans, [[Jinn|jinn|382|wiki]], [[Angels|angels|383|wiki]] and [[Shaitan|devils|384|wiki]] are all created by the power of God and bound to his will. Even if humans, jinn, angels and devils aligned to move or stop one atom, they could not succeed without God's will."
                    }
                ]
            },
            {
                "block_type": "heading",
                "content": "Books of God",
                "heading_level": 2,
                "children": [
                    {
                        "block_type": "image",
                        "img_src": "https://wikipedia.org/wiki/Special:Redirect/file/Historic_Quran_texts_in_Old_Dhaka.jpg",
                        "img_caption": "Historic Quran of Old Dhaka, Bangladesh"
                    },
                    {
                        "block_type": "paragraph",
                        "content": "The Sunnis further believe in the books of God, sent to the envoys of God. To them belong the Quran, the Torah, the Gospel and the Psalms"
                    },
                    {
                        "block_type": "paragraph",
                        "content": "The [[Quran|Quran|385|wiki]] is according to Sunni views the speech of God. Who listens to it and regards it as human speech is according to Sunni Creed by at-Tahāwī an [[Kafir|infidel|386|wiki]]. The [[Quran|Quran|387|wiki]] as the speech of God is sent down by the \"trustworthy Spirit\" (*ar-rūḥ al-amīn*; surah 26:193) and taught by [[Muhammad|Muhammad|388|wiki]]. God sent him down as inspiration (*wahy*) on his Messenger. The path of God's speech to the community of Muslims is a multi-stage process: God pronounced it, the [[Angel_Gabriel|angel Gabriel|389|wiki]] heard it and [[Mohammed|Mohammed|390|wiki]] repeated it, [[Mohammed|Mohammed|391|wiki]] repeated it to his [[Muhammad's_companions|companions|392|wiki]], and the [[Ummah|Ummah|393|wiki]] repeated them."
                    },
                    {
                        "block_type": "paragraph",
                        "content": "As the speech of God, the [[Quran|Quran|394|wiki]] is according to Sunnism uncreated. The teachings of the creation of the Quran is rejected by Sunnis. Anyone who takes this teaching is regarded as an unbeliever. The Quran is recited with the tongue, written into books and memorized by the heart, but remains the uncreated speech of God, because it is individable and can not be split by the transmition from heart to paper. [[At-Tahāwī|At-Tahāwī|395|wiki]] specifies that the [[Quran|Quran|396|wiki]] is not created like human speech. Rather, it came from God in an unexplained way as a word (*qaul*). [[Ibn_Taimīya|Ibn Taimīya|397|wiki]] explains that the [[Quran|Quran|398|wiki]] originated from God and will return (sc. At the end of times) too."
                    }
                ]
            },
            {
                "block_type": "heading",
                "content": "Prophets",
                "heading_level": 2,
                "children": [
                    {
                        "block_type": "heading",
                        "content": "Messages",
                        "heading_level": 3,
                        "children": [
                            {
                                "block_type": "paragraph",
                                "content": "Confessing to the [[Prophets_of_Islam|Prophets|399|wiki]] of God is also part of the Sunni faith. The first of the prophets is [[Adam_in_Islam|Adam|400|wiki]]. The original contract (*mīṯāq*) that God concluded with him and his descendants according to sura 7:172–173 is a reality according to Sunni belief. God has taken [[Abraham_in_Islam|Abraham|401|wiki]] as a friend (*ḫalīl*) and talked to [[Moses_in_Islam|Moses|402|wiki]] directly. The last of the prophets is [[Mohammed|Mohammed|403|wiki]] from the tribe of the [[Quraish|Quraish|404|wiki]]. The Sunnis do not differentiate between the messengers of God, (By rejecting some of them), but consider everything they have brought to be true."
                            },
                            {
                                "block_type": "paragraph",
                                "content": "God called the [[Prophets|prophets|405|wiki]] and presented their truthfulness through obvious miracles. The prophets conveyed God's command and prohibition, his promise and threat, and it is incumbent on people to believe what they have brought to be true. God has given people the act of obedience (*ṭāʿa*) and opposition (*maʿṣiya*) forbidden. God's right to the acts of obedience is not only an obligation for people through the intellect (*bi-muǧarrad al-ʿaql*), but also through it for making it a duty through the oral transmission of his prophets."
                            }
                        ]
                    },
                    {
                        "block_type": "heading",
                        "content": "Muhammad",
                        "heading_level": 3,
                        "children": [
                            {
                                "block_type": "paragraph",
                                "content": "Muhammad from the tribe of the [[Quraish|Quraish|406|wiki]] is not only the seal of the [[Prophets|prophets|407|wiki]] (ḫātam al-anbiyāʾ), rather, God placed him above all other prophets and made him Lord of men (*saiyid al-bašar*). He is God's chosen servant (*ʿabd*), [[Rasūl|Messenger|408|wiki]], the [[Imam|Imam|409|wiki]] of the godly (*imām al-atqiyāʾ*) and the beloved of the Lord of the Worlds (*ḥabīb rabb al-ʿālamīn*). He is sent with truth (*ḥaqq*), guidance (*hudā*) and light (*nūr*). God has him with his message to [[Arabs|Arabs|410|wiki]] and Non-Arabs as well as sent to the general public of the [[Jinn|jinn|411|wiki]] and humans and with his [[Sharia|Sharia|412|wiki]], the earlier religious laws [[Naskh_(tafsir)|abrogated|413|wiki]], except that which he has confirmed. Part of the Sunnis path is to follow the traditions (*āṯār*) of Muhammad internally and externally. They prefer his guidance to the guidance of anyone else."
                            },
                            {
                                "block_type": "paragraph",
                                "content": "Muhammad's prophethood is proven by miracles (*muʿǧizāt*) such as the splitting of the moon. The most obvious miracle is the Quran's [[I'jaz|inimitability|414|wiki]]. Every claim to prophethood after him is an error or imagination, since Muhammad is the last prophet. Another important point of teaching is the belief in [[Ascension_of_Muhammad|Muhammad's Ascension|415|wiki]] (*miʿrāǧ*). Accordingly the Prophet went on a nocturnal journey during which his person was transported to heaven while awake and from there to heights, \"which God has chosen\". God gave him what he had chosen for him and gave him his revelation. God has also blessed him in his life beyond and in this world."
                            }
                        ]
                    }
                ]
            },
            {
                "block_type": "heading",
                "content": "Eschatology",
                "heading_level": 2,
                "children": [
                    {
                        "block_type": "heading",
                        "content": "In the grave",
                        "heading_level": 3,
                        "children": [
                            {
                                "block_type": "paragraph",
                                "content": "According to Sunni doctrine, people are questioned in their graves by [[Munkar_and_Nakir|Munkar and Nakir|416|wiki]] after death. Munkar and Nakīr are two terrifying, huge figures who let the person sit upright in his grave with mind and body and then tell him about the oneness of God and the prophethood of Muhammad. They ask him: \"Who is your master? What is your religion? Who is your prophet?\". They are the two inspectors of the grave and their questioning is the first test (*fitna*) of humans after death. The believer will answer to this test: \"God is my Lord, Islam is my religion and Mohammed is my prophet.\" The doubter, on the other hand, will answer: \"Oh dear, I don't know. I heard people say something, and that's how I said it.\" He is then hit with an iron club so that he utters a loud scream that can be heard by everyone except people and jinn. If people heard him, they would lose consciousness. Children are also interviewed by Munkar and Nakīr as well as people who have disappeared, drowned or were eaten by predatory animals. Deceased Muslims receive the [[Dua|supplication|417|wiki]] said for them, and the [[Sadaqa|Sadaqa|418|wiki]] spoken in their name are a favor for them."
                            }
                        ]
                    },
                    {
                        "block_type": "heading",
                        "content": "Sign of the hour",
                        "heading_level": 3,
                        "children": [
                            {
                                "block_type": "paragraph",
                                "content": "Another point of belief are the \"signs of the hour\" (*ašrāṭ as-sāʿa*) that precede the day of resurrection. This includes the emergence of the [[Dajjal|Dajjal|419|wiki]], the rising of the sun in the west, the emergence of the [[Beast_of_the_Earth|Dabba|420|wiki]] from the earth and the excerpt from [[Gog_and_Magog|Gog and Magog|421|wiki]]. Jesus, the son of Mary, will descend from heaven and kill the Dajjal."
                            }
                        ]
                    },
                    {
                        "block_type": "heading",
                        "content": "Day of resurrection",
                        "heading_level": 3,
                        "children": [
                            {
                                "block_type": "paragraph",
                                "content": "On Day of the Resurrection the resurrection (*baʿṯ*) and the retribution of the deeds take place. First the bodies of all people, animals and jinn are put back together and revived. The souls are brought back into the body, the people rise from their graves, barefoot, naked and uncircumcised. The sun is approaching them and they are sweating."
                            },
                            {
                                "block_type": "paragraph",
                                "content": "A scales are set up to weigh people's deeds. The [[Weighing_scale|scales|422|wiki]] have two scales and one tongue and are as big as several layers of heaven and earth. The weights will have the weight of atoms and [[Chardal|mustard seeds|423|wiki]] in order to realize the accuracy of God's righteousness. The leaves with good deeds (*ḥasanāt*) are thrown in a beautiful shape into the scales of light and weigh down the scales by the grace (*faḍl*) of God, the leaves with bad deeds (*saiyiʾāt*) are thrown into the scales of darkness in an ugly form and reduce the weight of the scales through the justice (*ʿadl*) of God."
                            }
                        ]
                    },
                    {
                        "block_type": "heading",
                        "content": "The vision of God in the hereafter",
                        "heading_level": 3,
                        "children": [
                            {
                                "block_type": "paragraph",
                                "content": "The teachings of the Sunnis also include the vision of God (*ruʾyat Allāh*) in the hereafter, which has similarities with the *visio beatifica* in the [[Christianity|Christian tradition|424|wiki]]. With this teaching the Sunnis set themselves apart from the Muʿtazilites, the [[Zaidiyyah|Zaidiyyah|425|wiki]] and the [[Islamic_philosophy|philosophers|426|wiki]] who consider the vision of God intellectually impossible."
                            },
                            {
                                "block_type": "paragraph",
                                "content": "There are differing views among Sunni scholars about the timing and type of the divine vision. Al-Ashari states that God is seen on the day of resurrection, whereby only the believers see him, the unbelievers not because they are kept away from God. At-Tahāwī, on the other hand, was of the opinion that the vision of God was a reality for the inmates of Paradise. Ibn Taimīya doubles the vision of God: people see God while they are still in the places of the resurrection, and then after entering paradise."
                            },
                            {
                                "block_type": "paragraph",
                                "content": "As for the way of seeing God, al-Ash Aari and Ibn Taimiyah emphasized its visual characteristics. Al-Ashari meant that God can be seen with the eyes, just as one sees the moon on the night of the full moon. Ibn Taimīya adds that the vision of God is as one sees the sun on a cloudless day. In the ʿAqīda at-Tahāwīs, the transcendence of God is emphasized: the vision can neither be understood nor described, because none of the creatures are like God. According to al-Ghazālī's creed the pious in the hereafter see the essence of God without [[Matter|substance|427|wiki]] and [[Accident_(philosophy)|accidents|428|wiki]]. According to the creed of an-Nasafī, God is seen neither in one place nor in any direction or distance. There is also no connection to rays."
                            }
                        ]
                    },
                    {
                        "block_type": "heading",
                        "content": "Release of the monotheists from hell and intercession",
                        "heading_level": 3,
                        "children": [
                            {
                                "block_type": "paragraph",
                                "content": "According to the Ibn Taimīya's creed, the [[Umma|Umma|429|wiki]] of Muhammad is the first religious community to enter Paradise, Other religious communities also have the opportunity to get to paradise, because God leads whole peoples through the grace of his mercy (*aqwām*) out of hellfire. [[Ahmad_ibn_Hanbal|Ahmad ibn Hanbal|430|wiki]] and [[Al-Ghazālī|al-Ghazālī|431|wiki]] declare in their creeds that the [[Monotheist|monotheist|432|wiki]] en (*al-muwaḥḥidūn*) after being punished. Al-Ghazālī adds that through the grace (*faḍl*) of God no monotheist remains in hell for all eternity."
                            },
                            {
                                "block_type": "paragraph",
                                "content": "According to at-Tahāwī's creed, this only applies to the serious sinners from Muhammad's ummah: They are in hell, but not forever if they were monotheists at the time of death. What happens to them lies within God: if he wants, he forgives them through his grace (*faḍl*), and if he wants, he punishes them in his justice (*ʿadl*) and then brings them through His mercy (*raḥma*) and through the intercession of those who obey him out of hell and make them enter the Paradise Garden."
                            },
                            {
                                "block_type": "paragraph",
                                "content": "The intercession (*šafāʿa*) of the Messenger of God and its effect on those of his ummah who have committed serious sins is a fixed teaching point of the Sunni faith. The Prophet reserved the intercession especially for them. According to al-Ghazālī, the Sunni believer has a total of the intercession of the prophets, then the scholars, then the martyrs, then to believe the other believers in accordance with their dignity and their rank in God. Those of the believers who have no advocate will be brought out of hell by the grace of God."
                            }
                        ]
                    }
                ]
            },
            {
                "block_type": "heading",
                "content": "The predestination",
                "heading_level": 2,
                "children": [
                    {
                        "block_type": "heading",
                        "content": "Extent of the predestination",
                        "heading_level": 3,
                        "children": [
                            {
                                "block_type": "paragraph",
                                "content": "According to Sunni doctrine, everything that happens happens through God's decision (*qadāʾ*) and predestination ([[Qadar|Qadar|433|wiki]]) or his determination (*taqdīr*). Predestination includes the predestination of good and bad, sweet and bitter. God has that The measured (*qadar*) of creatures and determined their time of time. He makes his creatures sick and heals them, lets them die and makes them alive, while the creatures themselves have no power over it. God lets die without fear and brings to life without exertion. The one who dies dies on the appointed date, even if he is killed."
                            },
                            {
                                "block_type": "paragraph",
                                "content": "God has written the things predestined for the creatures on the well-kept tablet (*al-lauḥ al-maḥfūẓ*). The pen she wrote is the first thing God created. God commanded him to write down what will be until the day of resurrection. The pen has already dried out and the scrolls are rolled up. Everything that was written on it in ancient times is immutable."
                            },
                            {
                                "block_type": "paragraph",
                                "content": "God is righteous in his judgments (*aqḍiya*), but his righteousness cannot be decided by analogy with the righteousness of people, because unjust actions for people are only conceivable with regard to someone else's property, but God does not encounter someone else's property anywhere so that he could behave unfairly to him. The principle of predestination is God's mystery with regard to his creatures. No [[Archangel|Archangel|434|wiki]] and no prophet is informed of this. Reflecting on predestination leads to destruction and is a step toward rebellion against God because He has hidden the knowledge about it from people."
                            }
                        ]
                    },
                    {
                        "block_type": "heading",
                        "content": "The Blessed and the Damned",
                        "heading_level": 3,
                        "children": [
                            {
                                "block_type": "paragraph",
                                "content": "It is made easy for everyone for what they were created for. Blessed are whose who are saved by God's judgment (*qaḍāʾ Allāh*), condemned are whose who are condemned by the judgment of God. God created paradise and hell above all else; then he created the people who are worthy of them. He has designated some out of generosity (*faḍlan*) for paradise, the others out of justice (*ʿadlan*) for hell. God has always known the number of those who go to paradise and the number of those who go to hell. This number is neither increased nor decreased. When God creates the body of the embryo, he sends an angel to him who writes down his livelihood (*rizq*), the hour he dies, his deeds and whether he is a damned (šaqī) or a blessed (*saʿīd*)."
                            },
                            {
                                "block_type": "paragraph",
                                "content": "The Sunni believer does not doubt his belief. Humans neither know how they are registered by God (whether as believers or unbelievers), nor how it ends with them. God is also the converter of hearts (*muqallib al-qulūb*). Therefore it is recommended to say: \"A believer, if God is willing\" or \"I hope that I am a Believer\". Such a way of expression does not make people into doubters, because by that, they only mean that their otherworldly fate and their end are hidden from them. The Sunnis do not speak to any of the people who pray to the Kaaba, to paradise or hell, because of a good deed or a sin he has committed."
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "block_type": "heading",
        "content": "Sunni view of hadith",
        "heading_level": 1,
        "children": [
            {
                "block_type": "image",
                "img_src": "https://wikipedia.org/wiki/Special:Redirect/file/Cour_mosquee_Suleymaniye_Istanbul.jpg",
                "img_caption": "Süleymaniye Mosque in Istanbul."
            },
            {
                "block_type": "paragraph",
                "content": "The Quran as it exists today in book form was compiled by Muhammad's companions (*[[Sahabah|Sahabah|435|wiki]]*) within a handful of months of his death, and is accepted by all sects of Islam. Many matters of belief and daily life were not directly prescribed in the Quran, but were actions observed by Muhammad and the early Muslim community. Later generations sought out [[Oral_tradition|oral traditions|436|wiki]] regarding the early history of Islam, and the practices of Muhammad and his first followers, and wrote them down so that they might be preserved. These recorded oral traditions are called hadith. Muslim scholars have through the ages sifted through the hadith and evaluated the chain of narrations of each tradition, scrutinizing the trustworthiness of the narrators and judging the strength of each hadith accordingly."
            },
            {
                "block_type": "heading",
                "content": "Kutub al-Sittah",
                "heading_level": 2,
                "children": [
                    {
                        "block_type": "paragraph",
                        "content": "*Kutub al-Sittah* are six books containing collections of hadiths. Sunni [[Muslim_ibn_al-Hajjaj|Muslim|437|wiki]]s accept the hadith collections of [[Sahih_al-Bukhari|Bukhari|438|wiki]] and Muslim as the most authentic (*[[Sahih|sahih|439|wiki]]*), and while accepting all hadiths verified as authentic, grant a slightly lesser status to the collections of other recorders. Four other hadith collections are also held in particular reverence by Sunni Muslims, making a total of six:"
                    },
                    {
                        "block_type": "paragraph",
                        "content": "There are also other collections of hadith which also contain many authentic hadith and are frequently used by scholars and specialists. Examples of these collections include:"
                    },
                    {
                        "block_type": "list",
                        "content": [
                            {
                                "block_type": "list_item",
                                "list_type": "ordered",
                                "marker": "1.",
                                "content": "[[Sahih_al-Bukhari|Sahih al-Bukhari|440|wiki]] of [[Muhammad_al-Bukhari|Muhammad al-Bukhari|441|wiki]]"
                            },
                            {
                                "block_type": "list_item",
                                "list_type": "ordered",
                                "marker": "2.",
                                "content": "[[Sahih_Muslim|Sahih Muslim|442|wiki]] of [[Muslim_ibn_al-Hajjaj|Muslim ibn al-Hajjaj|443|wiki]]"
                            },
                            {
                                "block_type": "list_item",
                                "list_type": "ordered",
                                "marker": "3.",
                                "content": "[[Sunan_al-Sughra|Sunan al-Sughra|444|wiki]] of [[Al-Nasa'i|Al-Nasa'i|445|wiki]]"
                            },
                            {
                                "block_type": "list_item",
                                "list_type": "ordered",
                                "marker": "4.",
                                "content": "[[Sunan_Abu_Dawud|Sunan Abu Dawud|446|wiki]] of [[Abu_Dawood|Abu Dawood|447|wiki]]"
                            },
                            {
                                "block_type": "list_item",
                                "list_type": "ordered",
                                "marker": "5.",
                                "content": "[[Jami'_at-Tirmidhi|Jami' at-Tirmidhi|448|wiki]] of [[Al-Tirmidhi|Al-Tirmidhi|449|wiki]]"
                            },
                            {
                                "block_type": "list_item",
                                "list_type": "ordered",
                                "marker": "6.",
                                "content": "[[Sunan_Ibn_Majah|Sunan Ibn Majah|450|wiki]] of [[Ibn_Majah|Ibn Majah|451|wiki]]"
                            }
                        ]
                    },
                    {
                        "block_type": "list",
                        "content": [
                            {
                                "block_type": "list_item",
                                "list_type": "ordered",
                                "marker": "1.",
                                "content": "[[Musannaf_of_Abd_al-Razzaq|Musannaf of Abd al-Razzaq|452|wiki]] of [['Abd_ar-Razzaq_as-San'ani|'Abd ar-Razzaq as-San'ani|453|wiki]]"
                            },
                            {
                                "block_type": "list_item",
                                "list_type": "ordered",
                                "marker": "2.",
                                "content": "[[Musnad_Ahmad_ibn_Hanbal|Musnad|454|wiki]] of [[Ahmad_ibn_Hanbal|Ahmad ibn Hanbal|455|wiki]]"
                            },
                            {
                                "block_type": "list_item",
                                "list_type": "ordered",
                                "marker": "3.",
                                "content": "[[Mustadrak_al-Hakim|Mustadrak|456|wiki]] of [[Hakim_al-Nishaburi|Al Haakim|457|wiki]]"
                            },
                            {
                                "block_type": "list_item",
                                "list_type": "ordered",
                                "marker": "4.",
                                "content": "[[Muwatta_Imam_Malik|Muwatta|458|wiki]] of [[Imam_Malik|Imam Malik|459|wiki]]"
                            },
                            {
                                "block_type": "list_item",
                                "list_type": "ordered",
                                "marker": "5.",
                                "content": "[[Sahih_Ibn_Hibbaan|Sahih Ibn Hibbaan|460|wiki]]"
                            },
                            {
                                "block_type": "list_item",
                                "list_type": "ordered",
                                "marker": "6.",
                                "content": "[[Sahih_Ibn_Khuzaymah|Sahih Ibn Khuzaymah|461|wiki]] of [[Ibn_Khuzaymah|Ibn Khuzaymah|462|wiki]]"
                            },
                            {
                                "block_type": "list_item",
                                "list_type": "ordered",
                                "marker": "7.",
                                "content": "[[Sunan_al-Darimi|Sunan al-Darimi|463|wiki]] of [[Al-Darimi|Al-Darimi|464|wiki]]"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "block_type": "heading",
        "content": "Sunni State institutions",
        "heading_level": 1,
        "children": [
            {
                "block_type": "image",
                "img_src": "https://wikipedia.org/wiki/Special:Redirect/file/TRT_Diyanet_kurumsal_logo.png",
                "img_caption": "TRT Diyanet kurumsal logo"
            },
            {
                "block_type": "paragraph",
                "content": "One of the most important teaching institutions of Sunni Islam worldwide is the [[Al-Azhar_University|Azhar|465|wiki]] in Egypt. Article 32b, paragraph 7 of the Egyptian Azhar Law of 1961 stipulates that the Azhar \"follows the path of the Sunnis\" (*manhaǧ ahl as-sunna wa-l-jamāʿa*), Umma has agreed to the foundations of the religion and applications of fiqh, with its four [[Madhhab|disciplines|466|wiki]]. Only those who stick to the paths of their science and behavior can become a \"Member of the Council of Great Scholars\" (*haiʾat kibār al-ʿulamāʾ*), among whom the [[Grand_Imam_of_al-Azhar|Grand Imam of al-Azhar|467|wiki]] is elected. Zitouna University in Tunisia and University of al-Qarawiyyin in Morocco are recognized. They are also mentioned, along with the Azhar, in the final document of the Sunni Conference in Grozny."
            },
            {
                "block_type": "paragraph",
                "content": "Another body that claims to speak on behalf of Sunnism is the [[Council_of_Senior_Scholars_(Saudi_Arabia)|Council of Senior Religious Scholars|468|wiki]] founded in Saudi Arabia in 1971. In the past, the committee has expressed several times on fatwas about the Sunni-membership of certain Islamic groups within. In 1986 it published a fatwa excluding the [[Al-Ahbash|Ahbāsh|469|wiki]] community from Sunnism. The Islamic World League in Mecca, also funded by Saudi Arabia, made a resolution from 1987 that it regards Sunnism as the pure teachings at the time of the Messenger and the rightful existence of the Caliphate."
            },
            {
                "block_type": "paragraph",
                "content": "The Turkish [[Directorate_of_Religious_Affairs|Directorate of Religious Affairs|470|wiki]] (*Diyanet İşleri Başkanlığı*), follows the religious policy of the Ottoman Empire, providing a Sunni interpretation of Islam. Plans by the [[Committee_of_National_Unity|Committee of National Unity|471|wiki]] in the 1960s to convert the Diyanet authority into a non-denominational institution that also integrated the [[Alevism|Alevis|472|wiki]], failed because of resistance from conservative Sunni clergy inside and outside the Diyanet authority. Since the 1990s, the Diyanet authority has presented itself as an institution that stands above the denominations (*mezhepler üstü*) The religious education organized by the authority at the Turkish schools is based exclusively on the Sunni understanding of Islam."
            }
        ]
    },
    {
        "block_type": "heading",
        "content": "Self-image of the Sunnis",
        "heading_level": 1,
        "children": [
            {
                "block_type": "heading",
                "content": "As the \"saved sect\"",
                "heading_level": 2,
                "children": [
                    {
                        "block_type": "paragraph",
                        "content": "A well-known [[Hadith|Hadith|473|wiki]], which is to be interpreted as [[Vaticinium_ex_eventu|Vaticinium ex eventu|474|wiki]], says that the Muslim [[Umma|Umma|475|wiki]] will split into 73 sects, only one of which will be saved. The Sunnis have the idea that they are this \"saved sect\" (\"firqa nā niya\"). For example, [[Abu_Mansur_al-Baghdadi|Abu Mansur al-Baghdadi|476|wiki]] (d. 1037) explains at the beginning of his [[Heresiology|heresiographical|477|wiki]] work  al-Farq baina l-firaq  (\"The difference between the sects\") that there are 20 [[Rafida|Rafiditic|478|wiki]], 20 [[Kharijites|Kharijite|479|wiki]], 20 [[Qadariyah|Qadaritic|480|wiki]], 3 [[Murji'ah|Murjiite|481|wiki]], 3 Nadjāritic, 3 [[Karramiyya|karramitic|482|wiki]] and furthermore Bakriyya, Dirariyyya and [[Jahm_bin_Safwan|Jahmīya|483|wiki]]. These are the 72 erring sects. The 73rd sect that is the \"saved sect\" are the Sunnis (*ahl as-sunna wa-l-jamaʿa*). According to al-Baghdadi, they are composed of two groups, namely the followers of the [[Ra'y|Ra'y|484|wiki]] and the followers of the hadith. They agreed on the fundamentals of religion (*uṣūl ad-dīn*). There were only differences in the derivations (*furūʿ*) from the norms regarding the question of what [[Halal|permitted|485|wiki]] and what [[Haram|forbidden|486|wiki]] is. These differences are not so great that they considered each other to have strayed from the right path."
                    }
                ]
            },
            {
                "block_type": "heading",
                "content": "As center of Muslims",
                "heading_level": 2,
                "children": [
                    {
                        "block_type": "paragraph",
                        "content": "Later Sunni scholars also present the Sunnis as the center of Muslim community. The idea already appears to some extent in the Ashʿarite ʿAbd al-Qāhir al-Baghdādī, who emphasizes on several dogmatic questions that the Sunnis hold a position that lies in the middle between the positions of the other Islamic groups. An example is the question of predestination ([[Qadar|Qadar|487|wiki]]), in which, according to the [[Kasb|Kasb|488|wiki]] theory, you hold exactly the middle between the two extreme positions of the [[Jabriyya|Jabriyya|489|wiki]] and the [[Qadariyya|Qadariyya|490|wiki]]."
                    },
                    {
                        "block_type": "paragraph",
                        "content": "The Hanbali scholar [[Ibn_Taymiyyah|Ibn Taymiyyah|491|wiki]] (d. 1328), who was otherwise known for his uncompromising attitude, also adhered to this view. He said that the Sunnis represented \"the middle among the sects of the [[Umma|Umma|492|wiki]]\" (*al-wasaṭ fī firaq al-umma*), just as the Islamic Umma is the middle between the other religious communities. He illustrates this with the following examples:"
                    },
                    {
                        "block_type": "paragraph",
                        "content": "The Hanafi scholar [[Ali_al-Qari|ʿAlī al-Qārī|493|wiki]] (d. 1606) continued this idea later. In his anti-Shiite pamphlet Šamm al-alawāriḍ fī ḏamm ar-rawāfiḍ he quotes a tradition according to which [[Ali|ʿAlī ibn Abī Tālib|494|wiki]] said: \"Two kinds of people perish on me: the exaggerated lover and the exaggerated hater.\" He notes that the exaggerated lover is the Rafidites and the exaggerated hater is the Kharijit. The Sunni, on the other hand, loves ʿAlī in high esteem and is thus in the balanced middle (*al-wasaṭ allaḏī huwa al-qisṭ*). This relates al-Qari to the Qur'anic sura 2: 143, in which it is said that God made the Muslims a community standing in the middle (*umma wasaṭ*). Since the Sunnis stay away from the exaggeration described in the traditional ʿAlī saying, al-Qārī believes that they are also the actual \"[[Shia|Party of ʿAlīs|495|wiki]]\" (šīʿat ʿAlī)."
                    },
                    {
                        "block_type": "list",
                        "content": [
                            {
                                "block_type": "list_item",
                                "list_type": "ordered",
                                "marker": "1.",
                                "content": "When it comes to the attributes of God, the Sunnis stand in the middle between the Jahmiyya, who completely drains God of attributes, and the Muschabbiha, who make God similar to creation,"
                            },
                            {
                                "block_type": "list_item",
                                "list_type": "ordered",
                                "marker": "2.",
                                "content": "in the works of God they stand in the middle between the Qadariyya and the Jabriyya,"
                            },
                            {
                                "block_type": "list_item",
                                "list_type": "ordered",
                                "marker": "3.",
                                "content": "on the question of the threat from God (*waʿid Allah*) they stand in the middle between the Murdschi'a and the Waʿīdiyya, a subgroup of the Qadariyya,"
                            },
                            {
                                "block_type": "list_item",
                                "list_type": "ordered",
                                "marker": "4.",
                                "content": "When it comes to the question of faith and religion, they stand in the middle between Haruiyya (= Kharijites) and [[Muʿtazila|Muʿtazila|496|wiki]] on the one hand and Murji'a and Jahmiyya on the other,"
                            },
                            {
                                "block_type": "list_item",
                                "list_type": "ordered",
                                "marker": "5.",
                                "content": "and with regard to the [[Sahaba|Companions of the Prophets|497|wiki]] they are in the middle between [[Rafida|Rafidites|498|wiki]] and [[Kharijites|Kharijites|499|wiki]]."
                            }
                        ]
                    }
                ]
            },
            {
                "block_type": "heading",
                "content": "As the essential bearers of Islamic science and culture",
                "heading_level": 2,
                "children": [
                    {
                        "block_type": "paragraph",
                        "content": "ʿAbd al-Qāhir al-Baghdādī portrays the Sunnis in his work *al-Farq baina l-firaq* as the actual bearers of Islamic science and culture. Of all the sciences, knowledge and efforts of which Muslims are proud, al-Baghdādī explains that the Sunnis have a major share. In the last chapter of his book, al-Baghdadi also relates this to building activity in Islamic countries. He believes that the Sunnis with their [[Mosques|mosques|500|wiki]], [[Madrasa|madrasas|501|wiki]], palaces, factories and hospitals have achieved an unattainable position because none of the non-Sunnis have performed such services."
                    }
                ]
            }
        ]
    },
    {
        "block_type": "heading",
        "content": "Rivalry between Ashʿarīya and Salafīya and the 2016 Sunni conferences",
        "heading_level": 1,
        "children": [
            {
                "block_type": "image",
                "img_src": "https://wikipedia.org/wiki/Special:Redirect/file/Ahmed_el-Tayeb.jpg",
                "img_caption": "Ahmed el-Tayeb, Great-Imam of Azhar, was one of the most important participants of the Sunni-conference in Grozny, distanced himself from the declaration"
            },
            {
                "block_type": "paragraph",
                "content": "Since the second half of the 20th century, there have been fierce clashes within the Sunni camps between *[[Ash'ari|Ashʿarites|502|wiki]]* on the one hand and *[[Salafi_movement|Salafiyya|503|wiki]]* on the other, who exclude each other from Sunnism. In [[Indonesia|Indonesia|504|wiki]], the Ashʿarite scholar Sirajuddin Abbas (d. 1980) wrote several books in the 1960s in which he explicitly excluded the *Ahl as-salaf* from Sunnism. Among other things, he argued that there was no Salafi madhhab in the first 300 years of Islam. From this he deduced that those who called other Muslims to obey the Salafi *madhhab*, were promoting a *madhhab* which did not even exist. In his view, only the Ashʿarites were real Sunnis. Abbas' books served as the theological basis for anti-Salafist campaigns in [[Aceh|Aceh|505|wiki]] in 2014. During these campaigns, various Salafist schools in Aceh were closed by the provincial government."
            },
            {
                "block_type": "paragraph",
                "content": "Apparently because of doubts about the *Salafīya* affiliation with Sunniism, the \"Standing Committee on Scientific Investigation and Fatwa Issuing\" in [[Saudi_Arabia|Saudi Arabia|506|wiki]] issued a fatwa stating that they consider the Salafis as Sunnis. Like many Ashʿarites, the Salafis believe their teachings are the only true form of Sunnism, and hence reject the Asharites and [[Maturidi|Maturidites|507|wiki]] as part of Sunnism. An example is the Saudi scholar [[Muhammad_ibn_al-Uthaymeen|Muhammad Ibn al-ʿUthaimīn|508|wiki]], who in his 2001 published commentary on *Aqīda Wāsiṭīya* by [[Ibn_Taymiyyah|Ibn Taimiyya|509|wiki]] expressed the opinion that Ash'arites and Māturīdites would not count among the Sunnis, because their doctrine of attributes would be in contrast to the doctrine of the Prophet and his companions. For this reason, the view that three groups belong to Sunnism should also be rejected. Sunnis are only those who are *salaf* in terms of belief."
            },
            {
                "block_type": "paragraph",
                "content": "The accusation by some [[Wahhabism|Wahhabis|510|wiki]] that the Ashʿarites were not Sunnis was subject of a [[Fatwa|fatwa|511|wiki]] by the \"Egyptian Fatwa Office\" in July 2013. In its fatwa, the office rejected this accusation, affirming that the Ashʿarites still represented the \"multitude of [[Ulama|scholars|512|wiki]]\" (*jumhūr al-ʿulamāʾ*), and stressed out that they were the ones who in the past rejected the arguments of the [[Mulhid|atheists|513|wiki]] (*šubuhāt al-malāḥida*). Anyone who declares them to be unbelieving or who doubts their orthodoxy should fear for their religion. On the same day, the fatwa office made clear in a fatwa that, according to their understanding, the *Ahl as-Sunna wa-l-jama* only refer to those Muslims who are Ashʿarites or Maturidites."
            },
            {
                "block_type": "paragraph",
                "content": "The rivalry between *Ashʿarīyya* and *Salafiyya* became visible again at the two Sunni conferences in 2016, which were directed against the terror of the IS organization. The [[2016_international_conference_on_Sunni_Islam_in_Grozny|first conference|514|wiki]] with the title \"Who are the Ahl al-Sunna wa al-jama?\" took place in the Chechen capital [[Grozny|Grozny|515|wiki]] in August 2016 under the patronage of [[Ramzan_Kadyrov|Ramzan Kadyrov|516|wiki]]. Numerous religious figures from [[Egypt|Egypt|517|wiki]], [[India|India|518|wiki]], [[Syria|Syria|519|wiki]], [[Yemen|Yemen|520|wiki]] and the [[Russian_Federation|Russian Federation|521|wiki]] took part, including [[Ahmed_el-Tayeb|Ahmed el-Tayeb|522|wiki]], the [[Grand_Imam_of_al-Azhar|Grand Imam|523|wiki]] the Azhar, and [[Sheikh_Aboobacker_Ahmed|Sheikh Aboobacker Ahmed|524|wiki]], the [[Grand_Mufti_of_India|Grand Mufti of India|525|wiki]]. According to its organizers, the conference should \"mark a blessed turning point in efforts to correct the serious and dangerous distortion of religion by those extremists trying to usurp the venerable name of *Ahl al-Sunna wa-al-Jama'a*, him to coin exclusively on itself and to exclude its true representatives from it.\" In the final declaration the Salafis and [[Islamism|Islamist|526|wiki]] groups like [[Muslim_Brotherhood|Muslim Brotherhood|527|wiki]], [[Hizb_ut-Tahrir|Hizb ut-Tahrir|528|wiki]], etc. and the *[[Takfiri|Takfiri|529|wiki]]* organisations like [[Islamic_State_of_Iraq_and_the_Levant|ISIL|530|wiki]] were excluded from Sunni Islam. In response to this, various prominent *Salafiyya* figures held a counter-conference in [[Kuwait|Kuwait|531|wiki]] in November 2016 under the title \"The Correct Meaning of Sunnism\" (*al-Mafhūm aṣ-ṣaḥīḥ li-ahl as-sunna wa-l-jama*), in which they also distanced themselves from extremist groups, but at the same time insisted that *Salafiyya* was not only part of Sunnism, but represented Sunnism itself. The conference was chaired by Ahmad ibn Murabit, Grand Mufti of [[Mauritania|Mauritania|532|wiki]]. A few days later, [[Grand_Imam_of_al-Azhar|Grand Imam of Al-Azhar|533|wiki]] [[Ahmed_el-Tayeb|Ahmed el-Tayeb|534|wiki]] publicly distanced himself from the final declaration of the Grozny conference, reiterating that he had not participated in it and stressed that he naturally viewed the Salafists as Sunnis."
            }
        ]
    },
    {
        "block_type": "heading",
        "content": "See also",
        "heading_level": 1,
        "children": [
            {
                "block_type": "paragraph",
                "content": "• Outline of Islam"
            },
            {
                "block_type": "paragraph",
                "content": "• Glossary of Islam"
            },
            {
                "block_type": "paragraph",
                "content": "• Index of Islam-related articles"
            },
            {
                "block_type": "paragraph",
                "content": "• Islamic schools and branches"
            },
            {
                "block_type": "paragraph",
                "content": "• International Islamic Unity Conference (Iran)"
            },
            {
                "block_type": "paragraph",
                "content": "• Organisation of Islamic Cooperation"
            },
            {
                "block_type": "paragraph",
                "content": "• Persecution of Muslims"
            },
            {
                "block_type": "paragraph",
                "content": "• Shia view of the Quran"
            }
        ]
    },
    {
        "block_type": "heading",
        "content": "References",
        "heading_level": 1,
        "children": []
    },
    {
        "block_type": "heading",
        "content": "Further reading",
        "heading_level": 1,
        "children": [
            {
                "block_type": "paragraph",
                "content": ""
            },
            {
                "block_type": "list",
                "content": [
                    {
                        "block_type": "list_item",
                        "list_type": "ordered",
                        "marker": "1.",
                        "content": "Ahmed, Khaled. *Sectarian war: Pakistan's Sunni-Shia violence and its links to the Middle East* (Oxford University Press, 2011)."
                    },
                    {
                        "block_type": "list_item",
                        "list_type": "ordered",
                        "marker": "2.",
                        "content": "Charles River Editors. *The History of the Sunni and Shia Split: Understanding the Divisions within Islam* (2010) 44pp [excerpt](https://www.amazon.com/History-Sunni-Shia-Split-Understanding/dp/1502389983/); brief introduction."
                    },
                    {
                        "block_type": "list_item",
                        "list_type": "ordered",
                        "marker": "3.",
                        "content": "Farooqi, Mudassir, Sarwar Mehmood Azhar, and Rubeena Tashfeen. \"Jihadist Organizations History and Analysis.\" *Journal of Social, Political, and Economic Studies* 43.1/2 (2018): 142–151. [online](http://jspes.org/samples/JSPES43_1_2farooqi.pdf)"
                    },
                    {
                        "block_type": "list_item",
                        "list_type": "ordered",
                        "marker": "4.",
                        "content": "Gesink, Indira Falk. *Islamic reform and conservatism: Al-Azhar and the evolution of modern Sunni Islam* (Tauris Academic Studies, 2010)"
                    },
                    {
                        "block_type": "list_item",
                        "list_type": "ordered",
                        "marker": "5.",
                        "content": "Haddad, Fanar. *Understanding 'Sectarianism': Sunni-Shi'a Relations in the Modern Arab World* (Oxford UP, 2020)."
                    },
                    {
                        "block_type": "list_item",
                        "list_type": "ordered",
                        "marker": "6.",
                        "content": "Haddad, Fanar. \"Anti-Sunnism and anti-Shiism: Minorities, majorities and the question of equivalence.\" *Mediterranean Politics* (2020): 1–7 [online](https://www.academia.edu/download/61657158/Online_pub20200101-92953-1264chc.pdf)."
                    },
                    {
                        "block_type": "list_item",
                        "list_type": "ordered",
                        "marker": "7.",
                        "content": "Halverson, Jeffry. *Theology and creed in Sunni Islam: the Muslim Brotherhood, Ash'arism, and political Sunnism* (Springer, 2010)."
                    },
                    {
                        "block_type": "list_item",
                        "list_type": "ordered",
                        "marker": "8.",
                        "content": "Hazleton, Lesley. *After the prophet: the epic story of the Shia-Sunni split in Islam* (Anchor, 2010)."
                    },
                    {
                        "block_type": "list_item",
                        "list_type": "ordered",
                        "marker": "9.",
                        "content": "Kamolnick, Paul. *The Al-Qaeda Organization and the Islamic State Organization: History, Doctrine, Modus, Operandi, and US Policy to Degrade and Defeat Terrorism Conducted in the Name of Sunni Islam* (Strategic Studies Institute, United States Army War College, 2017) [online](https://dc.etsu.edu/cgi/viewcontent.cgi?article=1127&context=etsu_books)."
                    },
                    {
                        "block_type": "list_item",
                        "list_type": "ordered",
                        "marker": "10.",
                        "content": "Khaddour, Kheder. *Localism, War, and the Fragmentation of Sunni Islam in Syria* (Carnegie Endowment for International Peace., 2019) [online](https://carnegieendowment.org/files/03_19_Khaddour_Syria_Islam_final.pdf)."
                    },
                    {
                        "block_type": "list_item",
                        "list_type": "ordered",
                        "marker": "11.",
                        "content": "McHugo, John. *A Concise History of Sunnis and Shi'is* (2018) [excerpt](https://www.amazon.com/Concise-History-Sunnis-Shiis/dp/1626165866/)"
                    },
                    {
                        "block_type": "list_item",
                        "list_type": "ordered",
                        "marker": "12.",
                        "content": "Nuruzzaman, Mohammed. \"Conflicts in Sunni Political Islam and Their Implications.\" *Strategic Analysis* 41.3 (2017): 285–296 [online](https://www.academia.edu/download/52188176/Conflicts_Sunni_Political_Islam.pdf)."
                    },
                    {
                        "block_type": "list_item",
                        "list_type": "ordered",
                        "marker": "13.",
                        "content": "Nydell, Margaret K. *Understanding Arabs: A guide for modern times* (3rd ed. Hachette UK, 2018)."
                    },
                    {
                        "block_type": "list_item",
                        "list_type": "ordered",
                        "marker": "14.",
                        "content": "Tezcan, Baki. \"The Disenchantment of Sufism, the Rationalization of Sunni Islam, and Early Modernity.\" *Journal of the Ottoman and Turkish Studies Association* 7.1 (2020): 67–69 [online](https://www.jstor.org/stable/10.2979/jottturstuass.7.1.21)."
                    },
                    {
                        "block_type": "list_item",
                        "list_type": "ordered",
                        "marker": "15.",
                        "content": "Wheeler, Branon. [Applying the Canon in Islam: The Authorization and Maintenance of Interpretive Reasoning in Ḥanafī Scholarship](https://books.google.com/books?id=slLpouSlzPcC), [[SUNY_Press|SUNY Press|535|wiki]], 1996."
                    }
                ]
            },
            {
                "block_type": "list",
                "content": [
                    {
                        "block_type": "list_item",
                        "list_type": "ordered",
                        "marker": "1.",
                        "content": "Wheeler, Branon. [Applying the Canon in Islam: The Authorization and Maintenance of Interpretive Reasoning in Ḥanafī Scholarship](https://books.google.com/books?id=slLpouSlzPcC), [[SUNY_Press|SUNY Press|536|wiki]], 1996."
                    }
                ]
            },
            {
                "block_type": "heading",
                "content": "Online",
                "heading_level": 2,
                "children": [
                    {
                        "block_type": "paragraph",
                        "content": ""
                    },
                    {
                        "block_type": "list",
                        "content": [
                            {
                                "block_type": "list_item",
                                "list_type": "ordered",
                                "marker": "1.",
                                "content": "[Sunni: Islam](https://www.britannica.com/topic/Sunni), in *Encyclopædia Britannica Online*, by The Editors of Encyclopaedia Britannica, Asma Afsaruddin, Yamini Chauhan, Aakanksha Gaur, Gloria Lotha, Matt Stefon, Noah Tesch and Adam Zeidan"
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
const headings = [
    "Terminology",
    "History",
    "Adherents",
    "Jurisprudence",
    "Pillars of iman",
    "Sunni view of hadith",
    "Sunni State institutions",
    "Self-image of the Sunnis",
    "Rivalry between Ashʿarīya and Salafīya and the 2016 Sunni conferences",
    "See also",
    "References",
    "Further reading"
];
function returnFields() {
    return ["Sciences", "Technology & Engineering", "Humanities & Cultural Studies", "Social Sciences & Global Studies", "Business & Management", "Health & Medicine", "Environmental Studies & Earth Sciences", "Education, Learning & Personal Development", "Creative & Performing Arts", "Law, Governance & Ethics", "Recreation, Lifestyle & Practical Skills", "Technology & Media Literacy", "Philosophy & Critical Thinking", "Space & Astronomical Sciences", "Agriculture & Food Sciences", "Trades & Craftsmanship", "Reference & Indexing", "Other"];
}
const sourceContent = {
    type: 'source',
    title: 'Sunni Islam',
    headings: headings,
    content: sourceString,
    fields: returnFields(),
    taxonomy: {
        "fields": [
            {
                "primary_field": "Humanities & Cultural Studies",
                "reconcile": false
            },
            {
                "secondary_field": "Social Sciences & Global Studies",
                "reconcile": false
            },
            {
                "tertiary_field": "Other",
                "reconcile": false
            }
        ],
        "concepts": [
            {
                "concept_text": "Definition of Sunni Islam",
                "reference": "Sunni Islam#Terminology"
            },
            {
                "concept_text": "History of Sunni beliefs",
                "reference": "Sunni Islam#History"
            },
            {
                "concept_text": "Sunni jurisprudence and its sources",
                "reference": "Sunni Islam#Jurisprudence"
            },
            {
                "concept_text": "Principal articles of Sunni faith",
                "reference": "Sunni Islam#Pillars of iman"
            },
            {
                "concept_text": "Sunni organizations and institutions",
                "reference": "Sunni Islam#Sunni State institutions"
            },
            {
                "concept_text": "Identity as the 'saved sect'",
                "reference": "Sunni Islam#Self-image of the Sunnis"
            },
            {
                "concept_text": "Rivalry between Sunni theological schools",
                "reference": "Sunni Islam#Rivalry between Ashʿarīya and Salafīya and the 2016 Sunni conferences"
            }
        ],
        "facts": [
            {
                "fact_text": "85-90% of Muslims are Sunni.",
                "reference": "Sunni Islam#Terminology"
            },
            {
                "fact_text": "The first four caliphs are Abu Bakr, Umar, Uthman, Ali.",
                "reference": "Sunni Islam#History"
            },
            {
                "fact_text": "Sunni Islam centers around four legal schools.",
                "reference": "Sunni Islam#Jurisprudence"
            },
            {
                "fact_text": "The six pillars of imān are key beliefs in Sunni Islam.",
                "reference": "Sunni Islam#Pillars of iman"
            },
            {
                "fact_text": "Azhar University is a leading Sunni institution.",
                "reference": "Sunni Islam#Sunni State institutions"
            },
            {
                "fact_text": "Sunnis view themselves as the saved sect.",
                "reference": "Sunni Islam#Self-image of the Sunnis"
            }
        ],
        "generate_cards": {
            "state": true,
            "reason": ""
        }
    }
};
function returnSourceData() {
    return sourceContent;
}
function returnHeadings() {
    return headings;
}
function returnCardResponse() {
    return cardResponse;
}
let cardResponse = {
    status_code: 200,
    metadata: {},
    usage_data: {
        prompt_tokens: 23234,
        completion_tokens: 2796,
        total_tokens: 26030,
    },
    generated_content: {
        test_cards: [
            {
                type: "mcq",
                card_content: {
                    prompt: "Which term is used to refer to the largest branch of Islam, followed by 85-90% of Muslims worldwide?",
                    choices: [
                        { choice: "Sunni Islam", is_correct: true },
                        { choice: "Shia Islam", is_correct: false },
                        { choice: "Kharijites", is_correct: false },
                        { choice: "Ibadi", is_correct: false },
                    ],
                },
                concepts: [
                    {
                        concept_text: "Definition of Sunni Islam",
                        reference: "Sunni Islam#Terminology",
                    },
                ],
                facts: [
                    {
                        fact_text: "85-90% of Muslims are Sunni.",
                        reference: "Sunni Islam#Terminology",
                    },
                ],
                bloom_level: 1,
            },
            {
                type: "mcq",
                card_content: {
                    prompt: "Who were the first four caliphs recognized by Sunnis?",
                    choices: [
                        { choice: "Abu Bakr, Umar, Uthman, Ali", is_correct: true },
                        { choice: "Ali, Hasan, Husayn, Yazid", is_correct: false },
                        { choice: "Umar, Uthman, Muawiya, Yazid", is_correct: false },
                        { choice: "Hasan, Husayn, Abu Bakr, Umar", is_correct: false },
                    ],
                },
                concepts: [
                    {
                        concept_text: "History of Sunni beliefs",
                        reference: "Sunni Islam#History",
                    },
                ],
                facts: [
                    {
                        fact_text: "The first four caliphs are Abu Bakr, Umar, Uthman, Ali.",
                        reference: "Sunni Islam#History",
                    },
                ],
                bloom_level: 1,
            },
            {
                type: "cloze",
                card_content: {
                    prompt: "The six _____ of imān are key beliefs in Sunni Islam.",
                    options: [
                        { option: "pillars", cloze: "c0" },
                        { option: "caliphs", cloze: "null" },
                        { option: "sections", cloze: "null" },
                        { option: "rules", cloze: "null" },
                    ],
                },
                concepts: [
                    {
                        concept_text: "Principal articles of Sunni faith",
                        reference: "Sunni Islam#Pillars of iman",
                    },
                ],
                facts: [
                    {
                        fact_text: "The six pillars of imān are key beliefs in Sunni Islam.",
                        reference: "Sunni Islam#Pillars of iman",
                    },
                ],
                bloom_level: 1,
            },
            {
                type: "mcq",
                card_content: {
                    prompt: "Which institution is considered a leading Sunni university?",
                    choices: [
                        { choice: "Azhar University", is_correct: true },
                        { choice: "Harvard University", is_correct: false },
                        { choice: "Oxford University", is_correct: false },
                        { choice: "Yale University", is_correct: false },
                    ],
                },
                concepts: [
                    {
                        concept_text: "Sunni organizations and institutions",
                        reference: "Sunni Islam#Sunni State institutions",
                    },
                ],
                facts: [
                    {
                        fact_text: "Azhar University is a leading Sunni institution.",
                        reference: "Sunni Islam#Sunni State institutions",
                    },
                ],
                bloom_level: 1,
            },
            {
                type: "mcq",
                card_content: {
                    prompt: "What is a fundamental self-image of Sunni Muslims concerning their religious identity?",
                    choices: [
                        { choice: "They are the saved sect", is_correct: true },
                        { choice: "They are the oppressed sect", is_correct: false },
                        { choice: "They are the innovators", is_correct: false },
                        { choice: "They are the deviants", is_correct: false },
                    ],
                },
                concepts: [
                    {
                        concept_text: "Identity as the 'saved sect'",
                        reference: "Sunni Islam#Self-image of the Sunnis",
                    },
                ],
                facts: [
                    {
                        fact_text: "Sunnis view themselves as the saved sect.",
                        reference: "Sunni Islam#Self-image of the Sunnis",
                    },
                ],
                bloom_level: 1,
            },
            {
                type: "mcq",
                card_content: {
                    prompt: "What major rivalry exists within Sunni Islam?",
                    choices: [
                        { choice: "Between Ashʿarīya and Salafīya", is_correct: true },
                        { choice: "Between Sufis and Wahhabis", is_correct: false },
                        { choice: "Between Hanafis and Malikis", is_correct: false },
                        { choice: "Between Shafi'is and Hanbalis", is_correct: false },
                    ],
                },
                concepts: [
                    {
                        concept_text: "Rivalry between Sunni theological schools",
                        reference: "Sunni Islam#Rivalry between Ashʿarīya and Salafīya and the 2016 Sunni conferences",
                    },
                ],
                facts: [],
                bloom_level: 1,
            },
            {
                type: "cloze",
                card_content: {
                    prompt: "Sunni Islam centers around four {{c0: legal schools}}.",
                    options: [
                        { option: "legal schools", cloze: "c0" },
                        { option: "pillars of faith", cloze: "null" },
                        { option: "caliphs", cloze: "null" },
                        { option: "sects", cloze: "null" },
                    ],
                },
                concepts: [
                    {
                        concept_text: "Sunni jurisprudence and its sources",
                        reference: "Sunni Islam#Jurisprudence",
                    },
                ],
                facts: [
                    {
                        fact_text: "Sunni Islam centers around four legal schools.",
                        reference: "Sunni Islam#Jurisprudence",
                    },
                ],
                bloom_level: 1,
            },
            {
                type: "match",
                card_content: {
                    "ash'ari": "Founded by Abu al-Hasan al-Ash'ari",
                    maturidi: "Founded by Abu Mansur al-Maturidi",
                    athari: "Strict textualism in interpreting Qur'an and sunnah",
                },
                concepts: [
                    {
                        concept_text: "Rivalry between Sunni theological schools",
                        reference: "Sunni Islam#Rivalry between Ashʿarīya and Salafīya and the 2016 Sunni conferences",
                    },
                ],
                facts: [],
                bloom_level: 2,
            },
            {
                type: "mcq",
                card_content: {
                    prompt: "Which of the following is NOT one of the six principal articles of faith in Sunni Islam?",
                    choices: [
                        { choice: "Belief in the Prophets of God", is_correct: false },
                        { choice: "Belief in Angels", is_correct: false },
                        { choice: "Belief in Trinity", is_correct: true },
                        { choice: "Belief in Resurrection after Death", is_correct: false },
                    ],
                },
                concepts: [
                    {
                        concept_text: "Principal articles of Sunni faith",
                        reference: "Sunni Islam#Pillars of iman",
                    },
                ],
                facts: [],
                bloom_level: 2,
            },
            {
                type: "cloze",
                card_content: {
                    prompt: "A well-known Hadith says that the Muslim Umma will split into 73 sects, only one of which will be {{c0: saved}}.",
                    options: [
                        { option: "saved", cloze: "c0" },
                        { option: "punished", cloze: "null" },
                        { option: "enriched", cloze: "null" },
                        { option: "condemned", cloze: "null" },
                    ],
                },
                concepts: [
                    {
                        concept_text: "Identity as the 'saved sect'",
                        reference: "Sunni Islam#Self-image of the Sunnis",
                    },
                ],
                facts: [],
                bloom_level: 2,
            },
            {
                type: "mcq",
                card_content: {
                    prompt: "What does 'jama' in the phrase 'ahl as-sunna wal-jama' signify?",
                    choices: [
                        { choice: "Community", is_correct: true },
                        { choice: "Unity", is_correct: false },
                        { choice: "Faith", is_correct: false },
                        { choice: "Law", is_correct: false },
                    ],
                },
                concepts: [
                    {
                        concept_text: "Definition of Sunni Islam",
                        reference: "Sunni Islam#Terminology",
                    },
                ],
                facts: [],
                bloom_level: 1,
            },
            {
                type: "mcq",
                card_content: {
                    prompt: "Which of the following sources forms the basis for Sunni jurisprudence?",
                    choices: [
                        { choice: "The Quran and Hadith", is_correct: true },
                        { choice: "Solely Quran", is_correct: false },
                        { choice: "Only the Hadith", is_correct: false },
                        { choice: "The Quran and Sira", is_correct: false },
                    ],
                },
                concepts: [
                    {
                        concept_text: "Sunni jurisprudence and its sources",
                        reference: "Sunni Islam#Jurisprudence",
                    },
                ],
                facts: [],
                bloom_level: 2,
            },
            {
                type: "cloze",
                card_content: {
                    prompt: "Sunni Muslims accept the {{c0: hadith}} collections of Bukhari and Muslim as the most authentic.",
                    options: [
                        { option: "hadith", cloze: "c0" },
                        { option: "Qur'an", cloze: "null" },
                        { option: "tafsir", cloze: "null" },
                        { option: "fatwa", cloze: "null" },
                    ],
                },
                concepts: [
                    {
                        concept_text: "Sunni view of hadith",
                        reference: "Sunni Islam#Sunni view of hadith",
                    },
                ],
                facts: [],
                bloom_level: 1,
            },
            {
                type: "cloze",
                card_content: {
                    prompt: "Sunni jurisprudence is derived from the Quran, hadith, {{c0: juristic consensus}}, and analogical reasoning.",
                    options: [
                        { option: "juristic consensus", cloze: "c0" },
                        { option: "personal opinion", cloze: "null" },
                        { option: "cultural practice", cloze: "null" },
                        { option: "political authority", cloze: "null" },
                    ],
                },
                concepts: [
                    {
                        concept_text: "Sunni jurisprudence and its sources",
                        reference: "Sunni Islam#Jurisprudence",
                    },
                ],
                facts: [],
                bloom_level: 3,
            },
            {
                type: "cloze",
                card_content: {
                    prompt: "One of the most important teaching institutions of Sunni Islam worldwide is the {{c0: Azhar}} in Egypt.",
                    options: [
                        { option: "Azhar", cloze: "c0" },
                        { option: "Al-Haram", cloze: "null" },
                        { option: "Al-Aqsa", cloze: "null" },
                        { option: "Blue Mosque", cloze: "null" },
                    ],
                },
                concepts: [
                    {
                        concept_text: "Sunni organizations and institutions",
                        reference: "Sunni Islam#Sunni State institutions",
                    },
                ],
                facts: [
                    {
                        fact_text: "Azhar University is a leading Sunni institution.",
                        reference: "Sunni Islam#Sunni State institutions",
                    },
                ],
                bloom_level: 2,
            },
        ],
    },
    generated_at: "2024-09-11T08:26:12.000Z",
};
