const coupleQuestions = [
  {level:'easy', text:'What was your first impression of me?'},
  {level:'easy', text:'What is one little thing I do that you find adorable?'},
  {level:'easy', text:'What outfit of mine do you like the most?'},
  {level:'easy', text:'What is your favorite memory of us so far?'},
  {level:'easy', text:'What is something stupid that always makes you laugh?'},
  {level:'easy', text:'If we could teleport anywhere for dinner tonight, where are we going?'},
  {level:'easy', text:'What is one food you could eat every week forever?'},
  {level:'easy', text:'What is something you are weirdly competitive about?'},
  {level:'easy', text:'What song makes you think of me?'},
  {level:'easy', text:'What is a date we have had that you would happily repeat exactly?'},
  {level:'easy', text:'What celebrity would you want to have dinner with?'},
  {level:'easy', text:'What is something you think I am better at than I realize?'},
  {level:'easy', text:'What is your favorite physical feature of mine?'},
  {level:'easy', text:'What is something about you that you think I find especially attractive?'},
  {level:'easy', text:'If we had an entire day with no responsibilities, what should we do?'},
  {level:'easy', text:'What is your guilty-pleasure TV show, movie, song, or food?'},
  {level:'easy', text:'What is the funniest thing we have ever argued about?'},
  {level:'easy', text:'What is something ridiculous you would love for us to do together once?'},
  {level:'easy', text:'If our relationship were a movie genre, what would it be?'},
  {level:'easy', text:'Who is more likely to survive a zombie apocalypse, and why?'},
  {level:'easy', text:'What tiny thing can instantly improve your mood?'},
  {level:'easy', text:'If I were a flavor of ice cream, what flavor would I be?'},
  {level:'easy', text:'What is one thing we are surprisingly good at doing together?'},
  {level:'easy', text:'Which one of us would be more dangerous with unlimited money?'},
  {level:'easy', text:'What is one inside joke of ours you never want to lose?'},
  {level:'easy', text:'If we had to enter a couples competition, what would we have the best chance of winning?'},
  {level:'easy', text:'What is your favorite way for us to waste time together?'},
  {level:'easy', text:'If we switched lives for a day, what would surprise you most?'},
  {level:'easy', text:'What is a random skill you wish you could instantly master?'},
  {level:'easy', text:'What is one thing you think I would be terrible at on a reality show?'},
  {level:'easy', text:'What nickname would you give me if you had to invent a new one right now?'},
  {level:'easy', text:'What is one thing I do that is unintentionally funny?'},
  {level:'easy', text:'If we opened a business together, what should it be?'},
  {level:'easy', text:'What fictional couple are we absolutely nothing like?'},
  {level:'easy', text:'What is the most spontaneous thing you would do with me this weekend?'},
  {level:'easy', text:'If we had a signature cocktail or mocktail, what would be in it?'},
  {level:'easy', text:'What ordinary chore is more fun when we do it together?'},
  {level:'easy', text:'What is one harmless thing you would challenge me to do right now?'},
  {level:'easy', text:'What is your favorite picture of us, even if it is not the best-looking one?'},
  {level:'easy', text:'If our relationship had a mascot, what would it be?'},

  {level:'warm', text:'What is something you would like me to compliment you on more often?'},
  {level:'warm', text:'When do you feel most attractive around me?'},
  {level:'warm', text:'What is something romantic you would secretly love me to do?'},
  {level:'warm', text:'What is one thing you would like us to try on a date that we have never done?'},
  {level:'warm', text:'What is something I do that instantly puts you in a better mood?'},
  {level:'warm', text:'What is something about me you did not expect to fall in love with?'},
  {level:'warm', text:'What is one way we are surprisingly different?'},
  {level:'warm', text:'What is one way we are almost too similar?'},
  {level:'warm', text:'What do you think our biggest strength as a couple is?'},
  {level:'warm', text:'What do you think I understand about you better than most people?'},
  {level:'warm', text:'What is something you would like more of from me physically: hugging, kissing, cuddling, flirting, or something else?'},
  {level:'warm', text:'What is something you wish we did together more frequently?'},
  {level:'warm', text:'What is one trip you would really like us to take together?'},
  {level:'warm', text:'What is a side of you that you want me to see more often?'},
  {level:'warm', text:'When have you felt especially proud to be with me?'},
  {level:'warm', text:'What do you think makes our relationship different from your previous relationships?'},
  {level:'warm', text:'What is something you have learned about love from being with me?'},
  {level:'warm', text:'What is a completely harmless secret you have never told me?'},
  {level:'warm', text:'What is one thing you are curious about trying romantically with me?'},
  {level:'warm', text:'If you could relive one night we have spent together, which one?'},
  {level:'warm', text:'What kind of affection from me feels the most meaningful?'},
  {level:'warm', text:'What is a moment when you remember looking at me and thinking, wow, I really love this person?'},
  {level:'warm', text:'What is one thing I could do more often that would make you feel desired?'},
  {level:'warm', text:'What is a date idea that feels very us?'},
  {level:'warm', text:'What is something about our chemistry that you really like?'},
  {level:'warm', text:'What is one compliment from me that has actually stuck with you?'},
  {level:'warm', text:'What part of our normal routine feels oddly romantic to you?'},
  {level:'warm', text:'What is one place you would love to kiss me that we have never been together?'},
  {level:'warm', text:'What is something I wear that immediately gets your attention?'},
  {level:'warm', text:'What is one memory of us that still gives you butterflies?'},
  {level:'warm', text:'What is one way I can make you feel more pursued?'},
  {level:'warm', text:'What is something sweet you have wanted to surprise me with?'},
  {level:'warm', text:'What is one romantic tradition you would like us to create?'},
  {level:'warm', text:'When do you feel the safest being completely yourself with me?'},
  {level:'warm', text:'What is something you think we will laugh about when we are old?'},
  {level:'warm', text:'If we planned one perfect lazy morning together, what happens?'},
  {level:'warm', text:'What is one thing I do that makes you feel chosen?'},
  {level:'warm', text:'What kind of surprise from me would make you ridiculously happy?'},
  {level:'warm', text:'What is one future memory you really want us to create?'},
  {level:'warm', text:'What is something about me you appreciate more now than when we first started dating?'},

  {level:'vulnerable', text:'When do you feel closest to me?'},
  {level:'vulnerable', text:'When do you feel most distant from me?'},
  {level:'vulnerable', text:'What is something you sometimes need from me but have trouble asking for?'},
  {level:'vulnerable', text:'What is something you are afraid I misunderstand about you?'},
  {level:'vulnerable', text:'What is one insecurity you wish I understood better?'},
  {level:'vulnerable', text:'What is something I do that can make you feel unappreciated, even if I do not mean to?'},
  {level:'vulnerable', text:'What is something I do that makes you feel especially loved?'},
  {level:'vulnerable', text:'What is one thing you have wanted to tell me but could not figure out how to phrase?'},
  {level:'vulnerable', text:'What do you think I need emotionally that I do not always admit?'},
  {level:'vulnerable', text:'What do you think you need emotionally that you do not always admit?'},
  {level:'vulnerable', text:'What is one relationship habit you would like us to break?'},
  {level:'vulnerable', text:'What is one relationship habit you would never want us to lose?'},
  {level:'vulnerable', text:'What is something you wish I apologized for differently?'},
  {level:'vulnerable', text:'During arguments, what is something I do that makes resolving things harder?'},
  {level:'vulnerable', text:'During arguments, what is something you do that makes resolving things harder?'},
  {level:'vulnerable', text:'What is one compromise you have made for our relationship that I may not fully appreciate?'},
  {level:'vulnerable', text:'What is one compromise I have made that you appreciate?'},
  {level:'vulnerable', text:'What is something you are scared could eventually cause problems between us?'},
  {level:'vulnerable', text:'What is one thing you hope is different about our relationship a year from now?'},
  {level:'vulnerable', text:'What is one thing you desperately hope stays exactly the same?'},
  {level:'vulnerable', text:'What is something you wish I noticed without you having to ask?'},
  {level:'vulnerable', text:'When you shut down emotionally, what do you usually need from me?'},
  {level:'vulnerable', text:'What is a fear about the future that you do not talk about very often?'},
  {level:'vulnerable', text:'What is one way you think I sometimes misread your intentions?'},
  {level:'vulnerable', text:'What part of yourself are you still learning how to accept?'},
  {level:'vulnerable', text:'What is something you wish you could trust me with more easily?'},
  {level:'vulnerable', text:'What is one thing you need during conflict that I may not naturally give you?'},
  {level:'vulnerable', text:'When have you felt most emotionally supported by me?'},
  {level:'vulnerable', text:'What kind of reassurance works best for you when you are insecure?'},
  {level:'vulnerable', text:'What is something from your past that still affects how you love today?'},
  {level:'vulnerable', text:'What is one thing you wish we could talk about more calmly?'},
  {level:'vulnerable', text:'What do you worry I might eventually get tired of?'},
  {level:'vulnerable', text:'What is one way you have changed because of this relationship?'},
  {level:'vulnerable', text:'What is something you are still learning how to give me?'},
  {level:'vulnerable', text:'What does feeling respected by me look like in everyday life?'},
  {level:'vulnerable', text:'What does feeling emotionally safe with me look like?'},
  {level:'vulnerable', text:'What is a need of yours that you sometimes minimize because you worry it is too much?'},
  {level:'vulnerable', text:'When do you feel least understood by me?'},
  {level:'vulnerable', text:'What is one thing about our relationship you think deserves more attention?'},
  {level:'vulnerable', text:'What is something you hope I never stop trying to understand about you?'},

  {level:'hard', text:'Have I ever genuinely hurt your feelings without realizing how badly?'},
  {level:'hard', text:'What is the biggest thing you think I need to work on as a partner?'},
  {level:'hard', text:'What is the biggest thing you need to work on as a partner?'},
  {level:'hard', text:'Have you ever pretended something did not bother you because you did not want another argument?'},
  {level:'hard', text:'What is something about our relationship that you sometimes worry is not sustainable?'},
  {level:'hard', text:'What is a boundary of yours you think I do not completely understand?'},
  {level:'hard', text:'Have you ever felt taken for granted by me? When?'},
  {level:'hard', text:'Have you ever taken me for granted?'},
  {level:'hard', text:'What is something you have forgiven me for but have not completely forgotten?'},
  {level:'hard', text:'What is something you think I still hold against you?'},
  {level:'hard', text:'Have you ever seriously questioned whether we should stay together?'},
  {level:'hard', text:'If yes, what was happening that made you question it?'},
  {level:'hard', text:'What is something about me that you love but also find difficult to live with?'},
  {level:'hard', text:'What is something about yourself you worry could hurt our relationship someday?'},
  {level:'hard', text:'Is there anything you feel like you sacrifice disproportionately in our relationship?'},
  {level:'hard', text:'What is one truth about our relationship you think neither of us particularly likes admitting?'},
  {level:'hard', text:'If you could change one thing about the way I treat you, what would it be?'},
  {level:'hard', text:'If I could change one thing about the way you treat me, what do you think I would choose?'},
  {level:'hard', text:'What question are you secretly hoping I do not ask you tonight?'},
  {level:'hard', text:'What is something completely honest you think I need to hear, even if there is a chance I will not like hearing it?'},
  {level:'hard', text:'What is the hardest recurring problem between us to admit is actually recurring?'},
  {level:'hard', text:'What is something I do that you think I underestimate the impact of?'},
  {level:'hard', text:'Have you ever agreed with me just to end a conflict? What was it about?'},
  {level:'hard', text:'What is something you wish I would take more responsibility for?'},
  {level:'hard', text:'What is something you think you need to take more responsibility for?'},
  {level:'hard', text:'What is one resentment you never want to let quietly build between us?'},
  {level:'hard', text:'When have you felt lonely while we were technically together?'},
  {level:'hard', text:'What is one difference between us that you worry may become harder over time?'},
  {level:'hard', text:'What is something about our future that you think we may want different things about?'},
  {level:'hard', text:'What is one promise you think couples make too casually?'},
  {level:'hard', text:'What would make you lose trust in me faster than almost anything else?'},
  {level:'hard', text:'What behavior from you do you think tests my patience the most?'},
  {level:'hard', text:'What behavior from me tests your patience the most?'},
  {level:'hard', text:'What is something you are afraid to need from another person?'},
  {level:'hard', text:'What is one thing about love that you believe differently than I do?'},
  {level:'hard', text:'Have you ever felt like you were competing with something else in my life for attention?'},
  {level:'hard', text:'What is one subject where you think we both become too defensive?'},
  {level:'hard', text:'What is something you would want us to fix before ever making a much bigger commitment?'},
  {level:'hard', text:'If our relationship stayed exactly as it is today for five years, what would concern you most?'},
    {level:'hard', text:'What is the most uncomfortable truth you can say about yourself as a partner?'},

  {level:'brutal', text:'If nothing about our relationship changed from today onward, would you genuinely want to stay in it long-term?'},
  {level:'brutal', text:'What is the biggest reason you believe our relationship could eventually fail?'},
  {level:'brutal', text:'Is there anything you currently tolerate about me that you know you could not tolerate forever?'},
  {level:'brutal', text:'What part of who I am do you secretly wish were different?'},
  {level:'brutal', text:'What part of who you are do you worry I will eventually stop accepting?'},
  {level:'brutal', text:'Do you believe we are truly compatible, or do you think love is compensating for major incompatibilities?'},
  {level:'brutal', text:'What is one incompatibility between us that you think we may be underestimating?'},
  {level:'brutal', text:'If we met today as strangers, knowing everything you know now, would you still choose to date me?'},
  {level:'brutal', text:'What would have to happen for you to seriously consider ending this relationship?'},
  {level:'brutal', text:'Is there anything that has already happened between us that you consider close to unforgivable?'},
  {level:'brutal', text:'What is something you have forgiven me for intellectually but not emotionally?'},
  {level:'brutal', text:'What resentment toward me would you be most embarrassed to admit you still carry?'},
  {level:'brutal', text:'What resentment do you think I carry toward you?'},
  {level:'brutal', text:'Have you ever lost respect for me, even temporarily? What caused it?'},
  {level:'brutal', text:'Have I ever made you feel small, stupid, unwanted, or unimportant?'},
  {level:'brutal', text:'Have you ever deliberately hurt me because you were angry?'},
  {level:'brutal', text:'Have you ever wanted me to hurt because you were hurting?'},
  {level:'brutal', text:'What is the cruelest thing you think you have done to me emotionally?'},
  {level:'brutal', text:'What is the cruelest thing you think I have done to you emotionally?'},
  {level:'brutal', text:'Is there a way we fight that you believe is genuinely unhealthy?'},
  {level:'brutal', text:'During our worst arguments, do you still feel emotionally safe with me?'},
  {level:'brutal', text:'Is there anything you are afraid to tell me because you worry about how I will react?'},
  {level:'brutal', text:'Have you ever hidden the truth from me because honesty felt too dangerous or inconvenient?'},
  {level:'brutal', text:'What is the biggest lie, omission, or half-truth you have told me?'},
  {level:'brutal', text:'What do you think is the biggest thing I may not be completely honest with you about?'},
  {level:'brutal', text:'Do you trust me completely? If not, where does the trust break down?'},
  {level:'brutal', text:'Is there anyone in your life you believe I have a legitimate reason to feel threatened by?'},
  {level:'brutal', text:'Have you ever crossed a boundary with someone else that you would be upset if I crossed?'},
  {level:'brutal', text:'What counts as cheating to you that you think I might define differently?'},
  {level:'brutal', text:'Is emotional cheating as serious to you as physical cheating?'},
  {level:'brutal', text:'Have you ever wanted attention, affection, or validation from someone else because you were not getting it from me?'},
  {level:'brutal', text:'Have you ever seriously imagined being with someone else while we were together?'},
  {level:'brutal', text:'Is there anyone you have compared me to and felt I came up short?'},
  {level:'brutal', text:'If someone you found extremely attractive pursued you aggressively, what would make you vulnerable to it?'},
  {level:'brutal', text:'Do you believe attraction to each other has changed? If so, how?'},
  {level:'brutal', text:'Is there anything about our physical or romantic relationship you are deeply dissatisfied with?'},
  {level:'brutal', text:'Do you feel desired by me?'},
  {level:'brutal', text:'Do you genuinely desire me, or has affection sometimes replaced attraction?'},
  {level:'brutal', text:'Is there something you want romantically or sexually that you are afraid I would reject or judge?'},
  {level:'brutal', text:'If our physical intimacy stayed exactly as it is now forever, would you be satisfied?'},
  {level:'brutal', text:'What need of yours do you think I consistently fail to meet?'},
  {level:'brutal', text:'What need of mine do you think you consistently fail to meet?'},
  {level:'brutal', text:'Do you ever feel like you give more to this relationship than I do?'},
  {level:'brutal', text:'Where do you think I give more than you do?'},
  {level:'brutal', text:'What sacrifice have you made for us that you secretly wish I appreciated more?'},
  {level:'brutal', text:'Is there a sacrifice you would refuse to make for this relationship?'},
  {level:'brutal', text:'What is something you would choose over our relationship if forced to choose?'},
  {level:'brutal', text:'Do you think either of us has given up too much of ourselves to keep the relationship working?'},
  {level:'brutal', text:'Are you becoming more yourself in this relationship, or less yourself?'},
  {level:'brutal', text:'Is there any dream or goal you worry being with me could prevent you from pursuing?'},
  {level:'brutal', text:'If your dream life required moving somewhere I absolutely did not want to live, what would you do?'},
  {level:'brutal', text:'If my career or dream became much more important than yours for several years, could you handle that?'},
  {level:'brutal', text:'If one of us became significantly more successful or wealthy than the other, do you think it would change the relationship?'},
  {level:'brutal', text:'What disagreement about money could realistically destroy a relationship for you?'},
  {level:'brutal', text:'Do you trust my judgment with money?'},
  {level:'brutal', text:'What financial behavior from a partner would make you reconsider a future together?'},
  {level:'brutal', text:'If we combined finances someday, what would you be afraid of?'},
  {level:'brutal', text:'How much financial independence do you believe each partner should keep?'},
  {level:'brutal', text:'If one person consistently earned much more, what would “fair” actually mean?'},
  {level:'brutal', text:'How much influence should family members have over decisions we make as a couple?'},
  {level:'brutal', text:'Is there anyone in my family or social circle you genuinely worry could damage our relationship?'},
  {level:'brutal', text:'Is there anyone in your family or social circle you would choose over me during a serious conflict?'},
  {level:'brutal', text:'If your family strongly disapproved of me, how much would that affect your decision to stay?'},
  {level:'brutal', text:'What kind of relationship do you expect your partner to have with your family?'},
  {level:'brutal', text:'What major value do you think we disagree about most?'},
  {level:'brutal', text:'Is there a political, religious, moral, or lifestyle belief a partner could hold that would eventually make you leave?'},
  {level:'brutal', text:'Is there a belief I hold that makes you question whether we are compatible?'},
  {level:'brutal', text:'What does loyalty mean to you when your partner is wrong?'},
  {level:'brutal', text:'Should your partner defend you publicly even when they disagree with you privately?'},
  {level:'brutal', text:'What would make you stop respecting a partner even if you still loved them?'},
  {level:'brutal', text:'Do you believe love alone is enough reason to stay together?'},
  {level:'brutal', text:'Are there circumstances where leaving someone you still love is the right choice?'},
  {level:'brutal', text:'If we discovered we wanted completely different futures, would you choose the relationship or the future you want?'},
  {level:'brutal', text:'What future decision do you think we absolutely need to agree on before making a permanent commitment?'},
  {level:'brutal', text:'What is something about marriage, children, lifestyle, location, money, or family that you would not compromise on?'},
  {level:'brutal', text:'What do you think our relationship would look like during a genuinely terrible year?'},
  {level:'brutal', text:'If one of us changed dramatically over the next ten years, what would you consider part of loving them versus a reason to leave?'},
  {level:'brutal', text:'What truth about yourself are you most afraid could someday make me reconsider this relationship?'},
  {level:'brutal', text:'What truth about me do you think I most need to confront if we are going to have a healthy future?'},
    {level:'brutal', text:'If you had to decide tonight, with no fear of loneliness, sunk cost, hurting me, or starting over: would you still choose me—and why?'},

  {level:'closer', text:"What is something about me you understand now that you completely misunderstood when we first met?"},
  {level:'closer', text:"What is one moment when you felt like I was truly on your side?"},
  {level:'closer', text:"What is something I have done for you that seemed small to me but meant a lot to you?"},
  {level:'closer', text:"What is a quality in me you hope I never lose?"},
  {level:'closer', text:"What is one quality in yourself that you think our relationship has helped bring out?"},
  {level:'closer', text:"When have you felt most accepted by me exactly as you are?"},
  {level:'closer', text:"What is something about you that feels easier to love because of the way I see you?"},
  {level:'closer', text:"What is one thing you think I believe in you about, even when you doubt yourself?"},
  {level:'closer', text:"What is something you admire about the way I handle life?"},
  {level:'closer', text:"What is something about the way you handle life that you wish I praised more?"},
  {level:'closer', text:"What is a memory where you felt especially cared for by me?"},
  {level:'closer', text:"What is something I have remembered about you that made you feel known?"},
  {level:'closer', text:"When have I surprised you by understanding what you needed?"},
  {level:'closer', text:"What is something you think I notice about you that other people often miss?"},
  {level:'closer', text:"What is one part of your personality you feel safest showing me?"},
  {level:'closer', text:"What is something about your younger self you wish I could have been there to see?"},
  {level:'closer', text:"What do you think your younger self would like most about the person you are with now?"},
  {level:'closer', text:"What is something your younger self needed to hear that you think I could say to them?"},
  {level:'closer', text:"What is a difficult period in your life that you think shaped the way you love?"},
  {level:'closer', text:"What is one way I can be gentler with a sensitive part of you?"},
  {level:'closer', text:"When you are overwhelmed, what makes you feel accompanied rather than alone?"},
  {level:'closer', text:"What is one sentence I could say during a hard day that would actually help?"},
  {level:'closer', text:"What kind of support feels loving to you even when it does not solve anything?"},
  {level:'closer', text:"What is something I can do when you are stressed that tells you, ‘we’re a team’?"},
  {level:'closer', text:"What is one way you would like me to celebrate your wins?"},
  {level:'closer', text:"When something good happens to you, what reaction from me makes the moment feel even better?"},
  {level:'closer', text:"What is an accomplishment of yours that you wish I knew you were more proud of?"},
  {level:'closer', text:"What is a strength in you that you think developed because you had to survive something difficult?"},
  {level:'closer', text:"What is one strength of mine you rely on more than I probably realize?"},
  {level:'closer', text:"In what situation do you feel like we make an unusually good team?"},
  {level:'closer', text:"What is a challenge we have already survived that makes you trust us more now?"},
  {level:'closer', text:"What problem have we gotten better at handling together?"},
  {level:'closer', text:"What is one argument or difficult conversation you think ultimately made us understand each other better?"},
  {level:'closer', text:"What is something you think we have successfully repaired rather than simply moved past?"},
  {level:'closer', text:"What does a really good apology from me feel like to you?"},
  {level:'closer', text:"What helps you believe that a conflict between us is temporary rather than a threat to the relationship?"},
  {level:'closer', text:"After an argument, what small thing helps you feel reconnected fastest?"},
  {level:'closer', text:"What is one thing we could say to each other when a conversation is getting heated that would remind us we are on the same side?"},
  {level:'closer', text:"What is one behavior from me that makes it easier for you to lower your defenses?"},
  {level:'closer', text:"What is something you can do that helps me lower mine?"},
  {level:'closer', text:"What is a misunderstanding between us that you are glad we eventually cleared up?"},
  {level:'closer', text:"What is one thing you have learned about how my mind works?"},
  {level:'closer', text:"What is one thing you wish I understood about how your mind works?"},
  {level:'closer', text:"What do you think I worry about more than I admit?"},
  {level:'closer', text:"What do you think I am most afraid of losing?"},
  {level:'closer', text:"What do you think makes me feel most secure in our relationship?"},
  {level:'closer', text:"What makes you feel most secure in our relationship?"},
  {level:'closer', text:"What is something I do that quietly reassures you that I am still choosing you?"},
  {level:'closer', text:"What is something you do that you hope reassures me that you are choosing me?"},
  {level:'closer', text:"What is one thing about our relationship that feels dependable?"},
  {level:'closer', text:"What is an ordinary moment with me that you think you would miss terribly if it disappeared?"},
  {level:'closer', text:"What tiny ritual of ours means more to you than it probably looks like from the outside?"},
  {level:'closer', text:"What is one everyday thing you hope we are still doing together ten years from now?"},
  {level:'closer', text:"What is a boring part of life you think would actually be nice to grow old doing with me?"},
  {level:'closer', text:"What is a future version of us that makes you feel calm rather than excited?"},
  {level:'closer', text:"What is one future experience you think would make us feel even more like a team?"},
  {level:'closer', text:"What is something you would like us to learn together?"},
  {level:'closer', text:"What is a tradition we could start that would make future us grateful?"},
  {level:'closer', text:"What kind of home atmosphere would make you feel happiest living together long-term?"},
  {level:'closer', text:"What is one thing you hope our relationship teaches us both?"},
  {level:'closer', text:"What is something beautiful about our relationship that you think we sometimes forget because we are used to it?"},
  {level:'closer', text:"What is one thing about me you would defend if someone misunderstood it?"},
  {level:'closer', text:"What is something about you that you hope I will always interpret generously?"},
  {level:'closer', text:"What is one flaw of mine that you understand better now that you know where it comes from?"},
  {level:'closer', text:"What is one flaw of yours you hope I can see with compassion instead of frustration?"},
  {level:'closer', text:"What is something you think we should give each other more credit for?"},
  {level:'closer', text:"What effort do you notice me making lately?"},
  {level:'closer', text:"What effort are you making lately that you hope I notice?"},
  {level:'closer', text:"What is something you are grateful I never make you earn?"},
  {level:'closer', text:"What is something about my love that feels consistent?"},
  {level:'closer', text:"When do you feel most proud of the way we treat each other?"},
  {level:'closer', text:"What is one way being loved by me has changed the way you see yourself?"},
  {level:'closer', text:"What is one way being loved by you has changed the way you think I see myself?"},
  {level:'closer', text:"What part of our story makes you smile when you tell someone else about us?"},
  {level:'closer', text:"What do you think we bring out in each other when we are at our best?"},
  {level:'closer', text:"If we were having a difficult month, what would you want us to remember about who we are together?"},
  {level:'closer', text:"What is one reason you trust that we can keep learning each other?"},
  {level:'closer', text:"What is something you want me to know you appreciate, even if you do not say it enough?"},
  {level:'closer', text:"Finish this sentence: ‘I feel closest to you when I can tell that you…’"},
  {level:'closer', text:"If you could make me fully understand one thing about how much I matter to you, what would you want me to understand?"}
];

const levelNames = {easy:'Easy', warm:'Warm', vulnerable:'Vulnerable', hard:'Hard', brutal:'Brutal', closer:'Closer'};
const players = ['Colin', 'Lyndsey'];
const connectionCues = {
  easy: 'Keep it light. Follow the part of the answer that makes you curious.',
  warm: 'Stay with the good part for a second. Ask one genuine follow-up before moving on.',
  vulnerable: 'Try to understand before trying to solve. Reflect back what you heard.',
  hard: 'Listen all the way through before defending yourself. Start your reply with what you understood.',
  brutal: 'Slow this one down. Hear the full answer, then reflect it back before you respond.',
  closer: 'Connection cue: ask one curious “tell me more” follow-up before the next card.'
};
const raceMilestones = [
  {points:10, name:'Little Connection', rewards:[
    'Choose the next song and have a slow dance together.',
    'Ask for a 30-second hug and stay there until it actually feels long.',
    'Have your partner tell you three specific things they appreciate about you.',
    'Choose a favorite photo of you two and have your partner tell the story behind it.',
    'Pick the next three question categories.',
    'Get a five-minute cuddle break before the next card.'
  ]},
  {points:20, name:'Care Token', rewards:[
    'Choose one small act of care your partner will do for you tomorrow.',
    'Your partner makes your next coffee, tea, breakfast, or favorite little treat.',
    'Claim 20 minutes of phone-free time together later.',
    'Ask for a short back scratch, shoulder rub, or head scratch if you both want it.',
    'Your partner writes you a short love note to read later.',
    'Choose one cozy thing you want to do together before the day ends.'
  ]},
  {points:30, name:'Date Spark', rewards:[
    'Choose the theme of your next date.',
    'Pick one place you want the two of you to explore together.',
    'Choose dinner or the activity for your next date.',
    'Invent one tiny relationship tradition and try it once this week.',
    'Your partner plans a surprise mini-date around one thing you love.',
    'Add one shared experience to your couple bucket list and put a rough date on it.'
  ]},
  {points:40, name:'Big Relationship Reward', rewards:[
    'Your partner plans an entire low-pressure date around things you love.',
    'Choose an early or favorite date to recreate together.',
    'Choose a half-day adventure for the two of you to do soon.',
    'Each write a note for the other to open on a future date you choose.',
    'Choose one relationship ritual you want to keep for the next month.',
    'Plan one deliberately romantic night together, with the details chosen by you.'
  ]},
  {points:60, name:'Wildcard', rewards:[
    'Choose one thing you have wanted more of in the relationship and turn it into a fun plan together.',
    'You control the next date’s activity; your partner controls the food.',
    'Pick a new experience neither of you has done and put it on the calendar.',
    'Your partner surprises you with one thoughtful thing sometime this week.',
    'Choose a night to make intentionally special for no particular reason.',
    'Create a two-person challenge you both complete before the next game night.'
  ]},
  {points:80, name:'Date Advantage', rewards:[
    'Choose the location for the next date and let your partner plan what happens there.',
    'Claim one “you pick the adventure” token for a future day.',
    'Choose one thing from your shared bucket list to move to the top.',
    'Your partner plans a surprise evening with a budget you both agree on.',
    'Pick an ordinary day and turn it into an anniversary-style date just because.',
    'Choose a relationship memory you want to recreate with one new twist.'
  ]},
  {points:100, name:'Golden Token', rewards:[
    'Choose a meaningful date experience you want your partner to plan for you.',
    'Claim a future “your choice” date where you choose the vibe and your partner handles the details.',
    'Plan a day trip together centered on something you have both wanted to do.',
    'Choose one bigger shared experience to start saving or planning for.',
    'Create a sealed future-date idea together and pick a month to open it.',
    'Choose one tradition you want the two of you to still have years from now and start it.'
  ]}
];

const secretMilestones = [50, 100, 150, 200, 300, 500];
const STORAGE_KEY = 'answer-or-sip-reward-race-v1';
const gameState = {
  player: 0,
  deck: [],
  position: 0,
  turns: 0,
  points: [0, 0],
  answered: [0, 0],
  sips: [0, 0],
  skips: [0, 0],
  answeredLevels: [{}, {}],
  claimedMilestones: new Set(),
  claimedSecrets: new Set(),
  claimedAchievements: new Set(),
    rewardQueue: [],
  rewardOpen: false,
  activeReward: null
};

const gameQuestion = document.getElementById('game-question');
const questionPrompt = document.getElementById('question-prompt');
const questionCard = document.getElementById('question-card');
const turnLabel = document.getElementById('turn-label');
const levelChip = document.getElementById('level-chip');
const cardCount = document.getElementById('card-count');
const gameStats = document.getElementById('game-stats');
const difficultySelect = document.getElementById('difficulty-select');
const colinPill = document.getElementById('player-colin');
const lyndseyPill = document.getElementById('player-lyndsey');
const pointsColin = document.getElementById('points-colin');
const pointsLyndsey = document.getElementById('points-lyndsey');
const nextMilestone = document.getElementById('next-milestone');
const raceProgress = document.getElementById('race-progress');
const rewardModal = document.getElementById('reward-modal');
const rewardKicker = document.getElementById('reward-kicker');
const rewardTitle = document.getElementById('reward-title');
const rewardCopy = document.getElementById('reward-copy');
const rewardOptions = document.getElementById('reward-options');
const rewardClose = document.getElementById('reward-close');

function shuffle(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function pickRewards(list, count = 3) {
  return shuffle(list).slice(0, Math.min(count, list.length));
}

function secretRewardFor(total) {
  if (total === 50) {
    return {
      title: 'Something extra just unlocked',
      copy: 'Each of you picks one small thing you would genuinely enjoy doing together this week. Flip a coin for which one happens first.',
      options: ['Save this secret reward']
    };
  }
  if (total === 100) {
    return {
      title: 'Secret unlocked: Memory Night',
      copy: 'Choose one favorite relationship memory and recreate one piece of it — the food, place, music, activity, or feeling.',
      options: ['Save Memory Night']
    };
  }
  if (total === 150) {
    return {
      title: 'Secret unlocked: Surprise Token',
      copy: 'Randomly choose one person to surprise the other with a thoughtful mini-plan sometime in the next two weeks.',
      options: ['Save the Surprise Token']
    };
  }
  if (total === 200) {
    const planner = Math.random() < 0.5 ? 0 : 1;
    const payer = planner === 0 ? 1 : 0;
    return {
      title: 'Secret unlocked: Date Night',
      copy: `${players[planner]} plans the date. ${players[payer]} pays. Agree on a comfortable maximum budget together before the planning starts — then the planner gets creative.`,
      options: ['Lock in Date Night']
    };
  }
  if (total === 300) {
    const chooser = Math.random() < 0.5 ? 0 : 1;
    const organizer = chooser === 0 ? 1 : 0;
    return {
      title: 'Secret unlocked: Adventure Split',
      copy: `${players[chooser]} chooses the adventure. ${players[organizer]} handles the logistics. Keep the scope comfortable for both of you.`,
      options: ['Save Adventure Split']
    };
  }
  return {
    title: 'Secret unlocked: Legendary Date',
    copy: 'Choose one relationship experience that feels unusually special and make a real plan for it together. It can be simple — it just has to feel memorable.',
    options: ['Save the Legendary Date']
  };
}

function enqueueReward(reward) {
  gameState.rewardQueue.push(reward);
  showNextReward();
}

function showNextReward() {
  if (gameState.rewardOpen || !gameState.rewardQueue.length) return;
    const reward = gameState.rewardQueue.shift();
  gameState.activeReward = reward;
  gameState.rewardOpen = true;
  rewardKicker.textContent = reward.kicker || 'Reward unlocked';
  rewardTitle.textContent = reward.title;
  rewardCopy.textContent = reward.copy || 'Choose the one that sounds best right now.';
  rewardOptions.innerHTML = '';

  reward.options.forEach(text => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'reward-option';
    button.textContent = text;
    button.addEventListener('click', () => {
      [...rewardOptions.children].forEach(option => option.disabled = true);
      button.classList.add('selected');
      rewardCopy.textContent = `Locked in: ${text}`;
    });
    rewardOptions.appendChild(button);
  });

  rewardModal.hidden = false;
  requestAnimationFrame(() => rewardModal.classList.add('show'));
}

function closeReward() {
  rewardModal.classList.remove('show');
  window.setTimeout(() => {
    rewardModal.hidden = true;
    gameState.rewardOpen = false;
    gameState.activeReward = null;
    saveSession();
    showNextReward();
  }, 160);
}

function saveSession() {
  try {
    const saved = {
      player: gameState.player,
      deck: gameState.deck,
      position: gameState.position,
      turns: gameState.turns,
      points: gameState.points,
      answered: gameState.answered,
      sips: gameState.sips,
      skips: gameState.skips,
      answeredLevels: gameState.answeredLevels,
      claimedMilestones: [...gameState.claimedMilestones],
      claimedSecrets: [...gameState.claimedSecrets],
      claimedAchievements: [...gameState.claimedAchievements],
      rewardQueue: gameState.rewardQueue,
      activeReward: gameState.activeReward,
      difficulty: difficultySelect.value
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
  } catch (error) {
    // The game still works normally if private browsing blocks local storage.
  }
}

function restoreSession() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const saved = JSON.parse(raw);
    if (!Array.isArray(saved.points) || saved.points.length !== 2) return false;

    difficultySelect.value = saved.difficulty || 'all';
    gameState.player = saved.player === 1 ? 1 : 0;
    gameState.deck = Array.isArray(saved.deck) && saved.deck.length
      ? saved.deck
      : createDeck(difficultySelect.value);
    gameState.position = Number.isInteger(saved.position) ? saved.position : 0;
    gameState.turns = Number.isInteger(saved.turns) ? saved.turns : 0;
    gameState.points = saved.points;
    gameState.answered = Array.isArray(saved.answered) ? saved.answered : [0, 0];
    gameState.sips = Array.isArray(saved.sips) ? saved.sips : [0, 0];
    gameState.skips = Array.isArray(saved.skips) ? saved.skips : [0, 0];
    gameState.answeredLevels = Array.isArray(saved.answeredLevels) ? saved.answeredLevels : [{}, {}];
    gameState.claimedMilestones = new Set(saved.claimedMilestones || []);
    gameState.claimedSecrets = new Set(saved.claimedSecrets || []);
    gameState.claimedAchievements = new Set(saved.claimedAchievements || []);
    gameState.rewardQueue = Array.isArray(saved.rewardQueue) ? saved.rewardQueue : [];
    if (saved.activeReward) gameState.rewardQueue.unshift(saved.activeReward);
    gameState.activeReward = null;
    gameState.rewardOpen = false;
    rewardModal.hidden = true;
    rewardModal.classList.remove('show');

    updateScoreboard();
    updateRace();
    renderQuestion(false);
    showNextReward();
    return true;
  } catch (error) {
    return false;
  }
}


function updateRace() {
  pointsColin.textContent = `${gameState.points[0]} ♥`;
  pointsLyndsey.textContent = `${gameState.points[1]} ♥`;
  raceProgress.textContent = `Colin ${gameState.points[0]} · Lyndsey ${gameState.points[1]}`;

  const next = raceMilestones.find(milestone => !gameState.claimedMilestones.has(milestone.points));
  nextMilestone.textContent = next
    ? `First to ${next.points} · ${next.name}`
    : 'All visible rewards unlocked';
}

function checkRewards(playerIndex, level) {
  const points = gameState.points[playerIndex];
  const milestone = raceMilestones.find(item => points >= item.points && !gameState.claimedMilestones.has(item.points));

  if (milestone) {
    gameState.claimedMilestones.add(milestone.points);
    enqueueReward({
      kicker: `${players[playerIndex]} reached ${milestone.points} points`,
      title: milestone.name,
      copy: 'You got there first. Pick one relationship reward:',
      options: pickRewards(milestone.rewards, 3)
    });
  }

  const combined = gameState.points[0] + gameState.points[1];
  secretMilestones.forEach(total => {
    if (combined >= total && !gameState.claimedSecrets.has(total)) {
      gameState.claimedSecrets.add(total);
      const secret = secretRewardFor(total);
      enqueueReward({
        kicker: '✦ Secret unlocked',
        title: secret.title,
        copy: secret.copy,
        options: secret.options
      });
    }
  });

  
  if (

    gameState.answeredLevels[0].brutal > 0 &&
    gameState.answeredLevels[1].brutal > 0 &&
    !gameState.claimedAchievements.has('both-brutal')
  ) {
    gameState.claimedAchievements.add('both-brutal');
    enqueueReward({
      kicker: '✦ Hidden achievement',
      title: 'We Actually Talked',
      copy: 'You each answered a Brutal card. Before moving on, each choose one small thing from tonight’s conversation that you want to remember.',
      options: ['Keep this one']
    });
  }
}


function updateDeckLabels() {
  const counts = coupleQuestions.reduce((totals, question) => {
    totals[question.level] = (totals[question.level] || 0) + 1;
    return totals;
  }, {});

  const labels = {
        all: `Guided mix · all ${coupleQuestions.length}`,
    easy: `Easy · ${counts.easy || 0} playful`,
    warm: `Warm · ${counts.warm || 0} flirty`,
    vulnerable: `Vulnerable · ${counts.vulnerable || 0} honest`,
        hard: `Hard · ${counts.hard || 0} no hiding`,
    brutal: `Brutal · ${counts.brutal || 0} relationship test`,
    closer: `Closer · ${counts.closer || 0} bonding`
  };

  [...difficultySelect.options].forEach(option => {
    if (labels[option.value]) option.textContent = labels[option.value];
  });
}

function buildGuidedDeck(pool) {
  const buckets = pool.reduce((groups, question) => {
    if (!groups[question.level]) groups[question.level] = [];
    groups[question.level].push(question);
    return groups;
  }, {});

  Object.keys(buckets).forEach(level => {
    buckets[level] = shuffle(buckets[level]);
  });

  const startingCounts = Object.fromEntries(
    Object.entries(buckets).map(([level, questions]) => [level, questions.length])
  );
  const deck = [];
  const intenseLevels = new Set(['hard', 'brutal']);
  const bondingLevels = ['closer', 'warm', 'easy'];

  while (Object.values(buckets).some(questions => questions.length)) {
    let available = Object.keys(buckets).filter(level => buckets[level].length);
    const last = deck[deck.length - 1]?.level;
    const secondLast = deck[deck.length - 2]?.level;

    // Never allow three cards of the same type in a row when another type exists.
    if (last && last === secondLast) {
      const alternatives = available.filter(level => level !== last);
      if (alternatives.length) available = alternatives;
    }

    // A challenging card should usually open into connection instead of another challenge.
    let preferred = [];
    if (last === 'brutal') {
      preferred = bondingLevels.filter(level => available.includes(level));
    } else if (last === 'hard') {
      preferred = ['closer', 'warm', 'vulnerable', 'easy'].filter(level => available.includes(level));
    } else if (last === 'vulnerable' && Math.random() < 0.5) {
      preferred = ['closer', 'warm'].filter(level => available.includes(level));
    }

    const candidates = preferred.length ? preferred : available;
    const scored = candidates.map(level => {
      const remainingRatio = buckets[level].length / startingCounts[level];
      const connectionBias = level === 'closer' ? 0.08 : 0;
      const challengePenalty = intenseLevels.has(level) && intenseLevels.has(last) ? -0.2 : 0;
      return {
        level,
        score: remainingRatio + connectionBias + challengePenalty + Math.random() * 0.12
      };
    });

    scored.sort((a, b) => b.score - a.score);
    deck.push(buckets[scored[0].level].pop());
  }

  return deck;
}

function createDeck(selected) {
  const pool = selected === 'all'
    ? coupleQuestions
    : coupleQuestions.filter(question => question.level === selected);

  return selected === 'all' ? buildGuidedDeck(pool) : shuffle(pool);
}

function buildDeck() {
  const selected = difficultySelect.value;
  gameState.deck = createDeck(selected);
  gameState.position = 0;
  renderQuestion(false);
}

function updatePlayers() {
  const isColin = gameState.player === 0;
  colinPill.classList.toggle('active', isColin);
  lyndseyPill.classList.toggle('active', !isColin);
}

function updateScoreboard() {
  const totalSkips = gameState.skips[0] + gameState.skips[1];
  gameStats.textContent = `Colin: ${gameState.sips[0]} sips · Lyndsey: ${gameState.sips[1]} sips · ${totalSkips} skips`;
}

function renderQuestion(animate = true) {
  if (!gameState.deck.length) return;
    if (gameState.position >= gameState.deck.length) {
    gameState.deck = createDeck(difficultySelect.value);
    gameState.position = 0;
  }

  const q = gameState.deck[gameState.position];
  const apply = () => {
        gameQuestion.textContent = q.text;
        questionPrompt.textContent = connectionCues[q.level] || 'Answer to earn a point, or pass this one.';
    turnLabel.textContent = `${players[gameState.player]}'s turn`;
    levelChip.textContent = levelNames[q.level];
    levelChip.dataset.level = q.level;
        cardCount.textContent = `Card ${gameState.position + 1} of ${gameState.deck.length}`;
    updatePlayers();
    questionCard.classList.remove('is-leaving');
  };

  if (!animate) {
    apply();
    return;
  }

  questionCard.classList.add('is-leaving');
  window.setTimeout(apply, 190);
}

function advance(result) {
  const currentPlayer = gameState.player;
  const currentQuestion = gameState.deck[gameState.position];

  if (result === 'answered') {
    gameState.answered[currentPlayer] += 1;
    gameState.points[currentPlayer] += 1;
    gameState.answeredLevels[currentPlayer][currentQuestion.level] =
      (gameState.answeredLevels[currentPlayer][currentQuestion.level] || 0) + 1;
    checkRewards(currentPlayer, currentQuestion.level);
  }

  if (result === 'sip') {
    gameState.sips[currentPlayer] += 1;
  }

  if (result === 'skip') {
    gameState.skips[currentPlayer] += 1;
  }

  gameState.turns += 1;
  gameState.player = currentPlayer === 0 ? 1 : 0;
  gameState.position += 1;
    updateScoreboard();
  updateRace();
  renderQuestion(true);
  saveSession();
}

function resetGame() {
  gameState.player = 0;
  gameState.turns = 0;
  gameState.points = [0, 0];
  gameState.answered = [0, 0];
  gameState.sips = [0, 0];
  gameState.skips = [0, 0];
  gameState.answeredLevels = [{}, {}];
  gameState.claimedMilestones = new Set();
  gameState.claimedSecrets = new Set();
  gameState.claimedAchievements = new Set();
    gameState.rewardQueue = [];
  gameState.rewardOpen = false;
  gameState.activeReward = null;
  try { localStorage.removeItem(STORAGE_KEY); } catch (error) {}
  rewardModal.hidden = true;
  rewardModal.classList.remove('show');
  updateScoreboard();
  updateRace();
  buildDeck();
}

document.getElementById('game-answer').addEventListener('click', () => advance('answered'));
document.getElementById('game-sip').addEventListener('click', () => advance('sip'));
document.getElementById('game-skip').addEventListener('click', () => advance('skip'));
document.getElementById('game-shuffle').addEventListener('click', () => {
  buildDeck();
  saveSession();
});
document.getElementById('game-reset').addEventListener('click', resetGame);
difficultySelect.addEventListener('change', () => {
  buildDeck();
  saveSession();
});
rewardClose.addEventListener('click', closeReward);
rewardModal.addEventListener('click', event => {
  if (event.target === rewardModal) closeReward();
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && gameState.rewardOpen) closeReward();
});

updateDeckLabels();
if (!restoreSession()) resetGame();
