import bcrypt from 'bcryptjs';

const data={
    users: [
        {
          name: 'Shivam',
          email: "shivam@gmail.com",
          password: bcrypt.hashSync("5555", 8),
          isAdmin: true,
        },
        {
          name: 'Roshni',
          email: 'roshni@gmail.com',
          password: bcrypt.hashSync('5555', 8),
          isAdmin: false,
        },
        {
            name: 'Shini',
            email: "shini@gmail.com",
            password: bcrypt.hashSync("5555", 8),
            isAdmin: true,
          },
      ],
    products:[
        {
            name:'Housefull 4',
            category:'Comedy',
            image:'/images/house.jpg',
            price:120,
            seatavl:22,
            production:'Fox Star Studio',
            rating:2,
            numRev:30,
            description:"Harry (Akshay Kumar) works as a barber in a shop named 'Hulk Cut' in London and often experiences flashes from his past life. He and his brothers, Max and Roy (played by Bobby Deol and Riteish Deshmukh respectively) owe a huge amount of money to a gangster after Harry accidentally washed off the gangster's money owing to his bouts of short-term memory loss. To repay the money, the trio hatch a plan to marry Kriti, Neha and Pooja (Kriti Sanon, Kriti Kharbanda and Pooja Hegde), the three daughters of a billionaire, Thakral (Ranjeet). Things go as planned and everyone heads to Sitamgarh for the wedding. As soon as they reach the destination, Harry recalls everything from his past life. The film travels back to the year 1419 where Harry was Rajkumar Bala and Kriti was Rajkumari Madhu, his love interest. Max was the royal bodyguard Angrakshak Dharamputra who was in love with Rajkumari Meena (Neha in present life). Nartaki Bangdu Maharaj (Roy) and Rajkumar Mala (Pooja) were a couple. Owing to an evil conspiracy, the three pair of lovers had failed to complete their love stories and breathed their last. Now in the year 2019, the couples have been reborn. But there's a glitch. The pairings are wrong. Will Harry and his brothers finally get a happy 'ending' for their love story? The rest of the film holds an answer to that.",
        },
        {
            name:'Kabir Singh',
            category:'Drama',
            image:'/images/kabir.jpg',
            price:180,
            seatavl:0,
            production:'Cine1 Studio',
            rating:4,
            numRev:100,
            description:"Kabir Rajdheer Singh is a topper and senior medical student at Delhi medical college having anger management issues.He falls in love with a Junior student Preeti Sikka and is very possessive about her.Preeti's family opposes's their relationship to marry her to someone else.On the bachelorhood party of his elder other Kabir has a fight with Preeti and his family and goes high on drugs and alcohol where he lies unconscious for two days.Kabir gains conscious and finds Preeti has married someone else,his father to throws him out of the house for creating a scene at his brothers wedding.Kabir now finds a job at top Hospital in the city.But turns womanizer and alcoholic for loosing Preeti.",
        },
        {
            name:'Student of the Year 2',
            category:'Comedy',
            image:'/images/student.jpg',
            price:140,
            seatavl:20,
            production:'Dharma Productions',
            rating:1.5,
            numRev:50,
            description:"Rohan (Tiger Shroff), a student from Pishorilal Chamandas college dreams of joining the elite St. Teresa to rekindle his romance with his childhood sweetheart Mridula aka Mia (Tara Sutaria) who studies there, along with winning the coveted 'Student Of The Year'.Opportunity knocks his door as he finally gets admission through sports quota. There, his path crosses with that of the bratty Shreya (Ananya Panday) and his snobbish brother Manav (Aditya Seal). Soon as time passes by, both, hearts and bones are broken. Until we reach the finale where Rohan finally gets to pull off a desi Avenger during a kabbadi match. The plot of Student Of The Year 2 is superficial and candy-floss minus any logic. Seven years on, the makers of the franchise are all set to enrol new students and give viewers another treat to relish with Student of the Year 2. Student Of The Year 2 is produced by Karan Johar, Hiroo Yash Johar, Apoorva Mehta and Fox Star Studios Pvt.Ltd under the banner Dharma Productions & Fox Star Studios Pvt.Ltd.",
        },
        {
            name:'War',
            category:'Action',
            image:'/images/war.jpg',
            price:200,
            seatavl:20,
            production:'Yash Raj Films',
            rating:4,
            numRev:300,
            description:"India's top agent Kabir (Hrithik Roshan) leads the Elite Shadow Unit of R&AW, a compact group of the crème de la crème of the armed forces who are personally trained by him and work with him on various high-risk missions across the world. Among Kabir and Colonel Luthra's key targets are an international arms baron Rizwan Ilyasi who has been key in various acts of terrorism against the country. Khalid (Tiger Shroff) has fought his way up the ranks of the Indian armed forces. His greatest challenge and battle has been to fight against the sins of his father, once a decorated soldier working with Kabir who had turned a traitor. His ambition has been to join Kabir's team to remove any stains on their family name. Kabir is not keen due to their past history, but Colonel Luthra requests him to, and gradually Kabir is also impressed by Khalid's intense dedication and grit. Khalid becomes Kabir's greatest soldier ever, flirting with death repeatedly in mission after mission as they go after the country's enemies, including a mission against Rizwan Ilyasi that nearly kills Khalid. But Khalid's greatest mission, his toughest yet, is still to come. When his own mentor Kabir turns rogue and starts to go after top officials and scientists and officers in the Indian establishment, targeting and executing them viciously across the world. Colonel Luthra is unsure if Khalid has it in him to go after Kabir. Is he clever enough to hunt the man who trained him, and even if he does get him, does he have it in him to put a bullet in his hero's head? Luthra advises Khalid against the mission but he insists - he is the best protégé and the only one who can track the mentor. And only Kabir can answer the crucial question - why did he turn rogue? A vicious cat and mouse game ensues as protégé goes after mentor in a war that spills across the globe. As the chase unravels both Kabir and Khalid begin to finally realize, what desperate stakes really drive them in this terrifying war.",
        },
        {
            name:'Kesari',
            category:'Historical',
            image:'/images/kesari.jpg',
            price:190,
            seatavl:20,
            production:'Dharma Productions',
            rating:4.5,
            numRev:450,
            description:"Havaldar Ishwar Singh posted at Gulistan fort on Afghan border,Due to his skills a British officer becomes jealous of him as he considers Indian are not worthy of it.While returning from is patrol duty he saves an Afghan women whose trying to escape her forced marriage to save the women Ishwar Singh goes against his force as soon as they reach the fort the Afghans attack Gulistan fort.But Ishwar fights back he is then transferred to Saragrahi fort,Upon reaching there he finds the soldiers out there are not disciplined and stops their food until discipline is in place for which everyone hates.But when they find that even Ishwar Singh hasn't eaten for a week they start to respect him and discipline is bought in place.Ishwar Singh and his regiment then start to help the needy villagers, until he gets the news from British officers that 10,000 Afghan soldiers marching towards the Saragarhi fort.Ishwar Singh is given the option to back out as his army of 21 soldiers won't last for long against the 10,000 Afghan soldiers.But Ishwar Singh and his 21 soldiers fight with the Afghans until their last breath.",
        }
    ],
};
export default data;