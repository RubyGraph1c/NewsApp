package com.example.codeclan.NewsAppService.components;

import com.example.codeclan.NewsAppService.models.*;
import com.example.codeclan.NewsAppService.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import javax.persistence.Index;
import javax.persistence.Table;

@Table(indexes = {
        @Index(name = "idx_dataloader_rolerepository", columnList = "roleRepository")
})
@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    JournalistRepository journalistRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    ArticleRepository articleRepository;

    @Autowired
    CategoryRepository categoryRepository;

    @Autowired
    LocationRepository locationRepository;

    @Autowired
    RoleRepository roleRepository;

    public DataLoader() {

    }

    public void run(ApplicationArguments args) {

        Category ent = new Category("Entertainment");
        categoryRepository.save(ent);
        Category tech = new Category("Technology");
        categoryRepository.save(tech);
        Category covid = new Category("Covid-19");
        categoryRepository.save(covid);


        Location scotland = new Location("Scotland");
        locationRepository.save(scotland);
        Location glasgow = new Location("Glasgow");
        locationRepository.save(glasgow);
        Location edinburgh = new Location("Edinburgh");
        locationRepository.save(edinburgh);


        Role user = new Role("User");
        roleRepository.save(user);
        Role admin = new Role("Admin");
        roleRepository.save(admin);


        User lucinda = new User("lecs91", "codeclan1", admin, scotland);
        userRepository.save(lucinda);

        User murray = new User("majg97", "codeclan2", user, glasgow);
        userRepository.save(murray);

        User charles = new User("cmas90", "codeclan3", admin, edinburgh);
        userRepository.save(charles);

        Journalist katie = new Journalist("Katie Buchan", "https://www.linkedin.com/in/katie-buchan-9236aa11a/overlay/photo/");
        journalistRepository.save(katie);

        Journalist dominique = new Journalist("Dominique Haig", "https://twitter.com/TheatreImperat1/status/869194165560717312/photo/1");
        journalistRepository.save(dominique);

        Journalist rowan = new Journalist("Rowan Wood", "https://www.linkedin.com/in/rowan-wood-a14014a4/overlay/photo/");
        journalistRepository.save(rowan);

        // Tech articles - Katie Buchan

        Article tech1 = new Article("Strathclyde Uni Partnership Unveils New National Robotics Centre", "The new robotics centre will receive a share of £25 million to improve collaborative technology and help businesses unlock the full potential of automated industrial manufacturing."
                , "A new national robotics centre aims to advance smart manufacturing by eliminating barriers and accelerating widespread use of smart collaborative robotics technology.\n" +
                "\n" +
                "Borne from the Made Smarter Innovation Research Centre for Smart, Collaborative Industrial Robotics, the centre, led by Loughborough University, brings together a team of experts with experience in manufacturing, engineering, digital technology, robotics, human-factors, verification and safety, law, psychology, systems engineering, metrology, and information communications technology.\n" +
                "\n" +
                "The centre also includes key organisations across core UK industrial sectors including aerospace, automotive, agri-food, green energy, construction, and space.",
                katie, tech, glasgow, "2021-10-30", 0, "https://www.strath.ac.uk/media/departments/eee/Robotics,_NDE_Automation_&_Metrology_1600x600.jpg");
        articleRepository.save(tech1);


        Article tech2 = new Article("Leader Insights | Can Industry 4.0 Help Scotland Build Back Better?", "Will Boyle, CRO of Edinburgh-based data science and engineering firm, Forth Point, discusses how the fourth industrial revolution has the potential to change the game for how we use data."
                , "Scotland is now on a trajectory where it could be a world leader in data.\n" +
                "\n" +
                "It’s a country with a storied history in technology, maths, and innovation, as well as an incredible foundation of heavy industry, supported by an ecosystem of people that are savvy thanks to years of being a huge player in the energy sector.\n" +
                "\n" +
                "What’s going to accommodate Scotland’s move to being an aspirational figurehead in data is how much we embrace the fourth industrial revolution, and companies like Forth Point are here to help ease that transition.",
                katie, tech, scotland, "2021-11-01", 0, "https://i0.wp.com/www.digit.fyi/wp-content/uploads/2021/12/forth-point.jpeg?resize=640%2C360&ssl=1");
        articleRepository.save(tech2);


        Article tech3 = new Article("Edinburgh Third in Top Ten UK Cities for Tech Startups Outside London", "New research from software development company KLOC revealed Edinburgh as the third best city for UK tech start-ups outside of London."
                , "New research by software developers KLOC analysed data from Crunchbase for tech businesses created outside the English capital since January 2020.\n" +
                "\n" +
                "The study measured the number of startups per area, the total funding they have received, the average software engineer salary and how the area’s top university ranks for its computer science courses, with a score out of 10 for each of the four factors.\n" +
                "\n" +
                "Edinburgh placed third on the tech start-up capital list, scoring 24.28 in total. The city scored 10 points with ten companies created since January 2020 and has attracted a total of £404,125 for funding. Average annual salary for a software engineer stands at £38,962.",
                katie, tech, edinburgh, "2021-11-17", 0, "https://i1.wp.com/www.digit.fyi/wp-content/uploads/2021/11/rvhxIYOg.jpg?resize=640%2C360&ssl=1");
        articleRepository.save(tech3);


        //Covid articles - various

        Article covid1 = new Article("Covid in Scotland: New Scottish Omicron case not linked to others", "A new case of the Omicron variant of Covid-19 is not linked to the other nine detected in Scotland, the Scottish government has said."
                , "The additional case, confirmed on Wednesday, is in the NHS Greater Glasgow and Clyde area.\n" +
                "\n" +
                "Nine cases have been reported in previous days, with MSPs told that they were all linked to a single event.\n" +
                "\n" +
                "First Minister Nicola Sturgeon said on Tuesday that it was \"almost certain\" that more cases would be detected.\n" +
                "\n" +
                "A total of 10 infections with the Omicron variant have now been found in Scotland, along with several cases south of the border.",
                rowan, covid, scotland, "2021-11-16", 0, "https://ichef.bbci.co.uk/news/976/cpsprodpb/F389/production/_114154326_get3.jpg");
        articleRepository.save(covid1);


                Article covid2 = new Article("NHS 'sorry' over Covid booster jag chaos as Glasgow patients turned away at appointments", "HEALTH chiefs have apologised after patients were turned away from Covid booster jag appointments in Glasgow yesterday. "
                , "Chaos unfolded at vaccination clinics as confusion saw some offered an additional dose while others were refused their appointments. \n" +
                        "\n" +
                        "The blunder came two days after the Joint Committee on Vaccination and Immunisation (JCVI) updated official advice in the wake of an outbreak of the new coronavirus variant, Omicron. \n" +
                        "\n" +
                        "It recommended the interval between a second dose and a booster vaccination should be reduced to three months from six months.",
                rowan, covid, glasgow, "2021-11-30", 0, "https://www.glasgowtimes.co.uk/resources/images/13260492.jpg?display=1&htype=0&type=responsive-gallery");
        articleRepository.save(covid2);


        //Entertainment articles - Dominique Haig

        Article ent1 = new Article("Edinburgh King's panto: Sleeping Beauty is a dazzling five star extravaganza", "You won't find a more spectacular panto anywhere than the Edinburgh King's Sleeping Beauty, a dazzling five star extravaganza of love, laughter and everything we have come to expect from the best pantomime in the land."
                , "It has been a long time coming but the Capital’s much loved panto is back, and how.\n" +
                "\n" +
                "Exquisite lighting, fantastical effects, sublime costumes, sumptuous sets and a supremely talented cast bring this modern day retelling of the ever popular fairy tale to life with a script that gets the story across while leaving lots of room for all the madness and mayhem audiences have come to expect from a Christmas show at the Old Lady of Lady Street.",
                dominique, ent, edinburgh, "2021-11-20", 0, "https://www.edinburghnews.scotsman.com/webimg/b25lY21zOjYzZDlmZDBkLTA4NzktNGQ4ZS1hZDg4LWEzMWI3ZmJhOTZhNTowY2FmY2NmYi1lNTJhLTQxZTktYTlkOC1jYjFlZWI1MTc2NzQ=.jpg?&width=640");
        articleRepository.save(ent1);


        Article ent2 = new Article("Kevin Bridges responds to angry fans over pre-sale ticket chaos as he adds extra Glasgow tour dates", "Presale tickets for Kevin Bridges: The Overdue Catch-up went sale today (December 1) with general release scheduled for Friday, December 3. However some fans have been left angry after waiting in online queues - only to be kicked out."
                , "Thousands of fans have been left unhappy after failing to secure tickets to see Kevin Bridges.\n" +
                "\n" +
                "Eager fans wanting to see the Glaswegian comedian waited in the online queue this morning in a bid to get their hands on tickets to his upcoming Hydro shows.\n" +
                "\n" +
                "However due to the overwhelming demand for tickets, fans have been struggling to get to the Ticketmaster checkout to secure their seats with many taking to social media to vent with almost 8,000 people left in limbo.",
                dominique, ent, glasgow, "2021-09-01", 0, "https://i2-prod.glasgowlive.co.uk/incoming/article22333319.ece/ALTERNATES/s810/0_JS168340712.jpg");
        articleRepository.save(ent2);
    }
}
