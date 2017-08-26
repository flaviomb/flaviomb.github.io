import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-initial-page-periodicos',
  templateUrl: './initial-page-periodicos.component.html',
  styleUrls: ['./initial-page-periodicos.component.css']
})
export class InitialPagePeriodicosComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }


    initialImagePeriodicos = [

      {imageTitle: 'Bibliocanto',
       imagePath:   '../../../assets/periodicos/bibliocanto.png',
       link: 'https://periodicos.ufrn.br/bibliocanto/index',
      imageDescription: 'O Jornal BiblioCanto é uma publicação da Biblioteca Central Zila Mamede (BCZM), da Universidade Federal do Rio Grande do Norte (UFRN), que foi lançado no ano de 1994. Esse periódico circulou durante o ano de 1995, com periodicidade semestral, no entanto, sofreu interrupção de 1996 a 1998, sendo relançado em 1999. Além disso, ele passou por nova suspensão em 2001 e voltou a circular somente no ano de 2008. Em 2009, o BiblioCanto foi novamente interrompido e em 2015 mudou para o formato de revista eletrônica, reafirmando o seu objetivo precípuo de servir como espaço aberto a disseminação da produção científica produzida no País.' },

      {imageTitle: 'Biblioonline',
       imagePath:   '../../../assets/periodicos/biblio-online.png',
       link: 'http://periodicos.ufpb.br/ojs2/index.php/biblio',
      imageDescription: 'A BIBLIONLINE é uma revista eletrônica que prioriza colaborações inéditas, principalmente aquelas resultantes de Trabalhos de Conclusão de Curso de Graduação e Especialização, Projetos de Iniciação Científica, Monitoria e Extensão nas áreas de Biblioteconomia, Arquivologia, Museologia e Ciência da Informação. A Revista Biblionline está classificada pelo WebQualis nas seguintes áreas: Ciências Sociais Aplicadas - B1 Psicologia - B3 Administração,Ciências Contábeis e Turismo - B3 Interdisciplinar - B3.' },


      {imageTitle: 'Biblioteca Escolar em Revista',
       imagePath:   '../../../assets/periodicos/biblioteca-escolar-em-revista.png',
       link: 'http://revistas.ffclrp.usp.br/berev',
      imageDescription: 'Biblioteca Escolar em Revista é uma revista semestral da Faculdade de Filosofia, Ciências e Letras / USP-Ribeirão Preto que se dedica à divulgação especializada nos estudos sobre história da leitura, biblioteca escolar, práticas de leitura no âmbito escolar, literatura infanto-juvenil e mediação cultural na biblioteca escolar, publicando principalmente pesquisas originais, como também documentos especiais, traduções e resenhas.'},

    {imageTitle: 'Bibliotecas Universitárias: pesquisas, experiências e perspectivas',
     imagePath:   '../../../assets/periodicos/bibliotecas-universitarias.png',
     link: 'https://seer.ufmg.br/index.php/revistarbu/',
    imageDescription: 'A revista Bibliotecas Universitárias é uma publicação semestral de natureza científica editada pela Biblioteca Universitária da Universidade Federal de Minas Gerais (UFMG) voltada para pesquisadores e profissionais de informação. Sua missão é difundir o conhecimento em Biblioteconomia e Ciência da Informação, temas pertinentes às bibliotecas universitárias, abrangendo as questões teóricas e práticas das áreas, em seus aspectos tecnológicos, humanos, sociais e afins.' },


    {imageTitle: 'Brazilian Journal of Information Science: Research Trends',
     imagePath:   '../../../assets/periodicos/bjoisrt.png',
     link: 'http://www2.marilia.unesp.br/revistas/index.php/bjis',
    imageDescription: 'BRAJIS is published by the Graduate Program in Information Science - UNESP / Marilia - ISSN: 1981-1640 - DOI 10.22556/1981-1640. Qualis Capes - Applied Social Sciences I: B1 - Indexed in Library Literature & Information Science Index (EBSCO Publishing Inc.); Sistema Regional de Información en Línea para Revistas Científicas de América Latina, el Caribe, España y Portugal (Latindex); Dialnet (Spain); Directory of Open Access Journals (DOAJ); and Diadorim/IBICT.' },


    {imageTitle: 'CIBERLEGENDA',
     imagePath:   '../../../assets/periodicos/ciber-legenda.png',
     link: 'http://www.proppi.uff.br/ciberlegenda/',
    imageDescription: 'Criada em 1998 pelo PPGCOM/UFF, a revista Ciberlegenda tem como principal objetivo a publicação de artigos científicos, bem como resenhas e entrevistas, que sejam de interesse para os estudos em Comunicação e áreas afins.' },

    {imageTitle: 'Ciência da Informação em Revista',
     imagePath:   '../../../assets/periodicos/ciencia-da-informacao-em-revista.png',
     link: 'http://www.seer.ufal.br/index.php/cir/index',
    imageDescription: 'É um periódico científico corrente de publicação quadrimestral do Curso de Biblioteconomia da Universidade Federal de Alagoas (CB/UFAL), que tem como finalidade promover a produção e a divulgação do conhecimento técnico-científico no campo multidisciplinar da Ciência da Informação e Biblioteconomia, e de áreas afins.' },



      {imageTitle: 'Em Questão',
       imagePath:   '../../../assets/periodicos/em-questao.png',
       link: 'http://www.seer.ufrgs.br/index.php/EmQuestao',
      imageDescription: 'Em Questão é um periódico científico da área de Ciência da Informação publicado pelo Programa de Pós-graduação em Comunicação e Informação da Universidade Federal do Rio Grande do Sul. Publicada desde 2003, em continuidade à Revista de Biblioteconomia e Comunicação, lançada em 1986, Em Questão tem periodicidade quadrimestral e é veiculada em formato eletrônico na modalidade de acesso aberto.' },


        {imageTitle: 'Folha de Rosto',
         imagePath:   '../../../assets/periodicos/folha-de-rosto.png',
         link: 'http://periodicos.ufca.edu.br/ojs/index.php/folhaderosto',
        imageDescription: 'A ‘Folha de Rosto: revista de biblioteconomia e ciência da informação’ é um periódico científico publicado pelo Programa de Pós-Graduação em Biblioteconomia (PPGB), através do Mestrado Profissional em Biblioteconomia, da Universidade Federal do Cariri (UFCA), em formato eletrônico, que surgiu no contexto do Projeto de Iniciação à Docência “Prática Bibliotecária na Unidade Curricular de Organização e Tratamento da Informação” do Curso de Biblioteconomia, no ano de 2015.' },

        {imageTitle: 'InCID: Revista de Ciência da Informação e Documentação',
        imagePath:   '../../../assets/periodicos/incid.png',
         link: 'https://www.revistas.usp.br/incid/',
        imageDescription: 'A InCID: Revista de Ciência da Informação e Documentação se dedica à divulgação especializada da área informacional, abrindo espaço a discussões interdisciplinares e interinstitucionais de temas informacionais e possí­veis interfaces que permeiam as temáticas exploradas. Além de artigos e relatos de pesquisa inéditos, a revista publica resenhas de livros, documentos especiais, entrevistas e traduções de autoria de docentes e pesquisadores, desde que aprovados em revisão cega por pares (double blind peer review) e pelo Comitê Editorial. ' },


        {imageTitle: 'Informação@Profissões',
        imagePath:   '../../../assets/periodicos/informacao-profissoes.png',
         link: 'http://www.uel.br/revistas/uel/index.php/infoprof',
        imageDescription: 'A revista Informação@Profissões é um periódico técnico-científico eletrônico vinculado ao Programa de Pós-Graduação em Ciência da Informação da Universidade Estadual de Londrina (UEL), disponível em Open Access, no sistema SEER (Serviço de Editoração Eletrônica de Revistas).' },




        {imageTitle: 'Informação & Informação',
        imagePath:   '../../../assets/periodicos/informacao-e-informacao.png',
         link: 'http://www.uel.br/revistas/uel/index.php/informacao/index',
        imageDescription: 'A revista Informação & Informação, iniciada em 1996, é um periódico científico eletrônico do Programa de Pós-Graduação em Ciência da Informação (PPGCI) do Departamento de Ciência da Informação da Universidade Estadual de Londrina (UEL), disponível em Open Access, no sistema SEER (Serviço de Editoração Eletrônica de Revistas). Assim, Informação & Informação tem como objetivo disseminar a informação científica na área da Ciência da Informação e difundir o diálogo intelectual entre pesquisadores, profissionais e estudantes que atuam em diferentes regiões do país e no exterior' },


        {imageTitle: 'Informação & Sociedade: Estudos',
        imagePath:   '../../../assets/periodicos/informacao-e-sociedade.png',
         link: 'http://www.ies.ufpb.br/ojs2/index.php/ies',
        imageDescription: 'Informação & Sociedade: Estudos (I&S) é um periódico na área da Ciência da Informação vinculado ao Programa de Pós-Graduação em Ciência da Informação da Universidade Federal da Paraíba. I&S está avaliado na base de dados Qualis da CAPES como A1.' },


         {imageTitle: 'Informação & Tecnologia',
          imagePath:   '../../../assets/periodicos/informacao-e-tecnologia.png',
           link: 'http://periodicos.ufpb.br/ojs/index.php/itec',
          imageDescription: 'Informação & Tecnologia (Itec) é uma publicação semestral da Associação Nacional de Pesquisa e Pós-Graduação em Ciência da Informação - ANCIB. Idealizada pelos grupos de pesquisaGPNTI/UNESP e WRCO/UFPB para o GT8-Ancib, tem como objetivos veicular artigos originais e favorecer a troca de informações e pontos de vista sobre informação e tecnologia no dominio da Ciência da Informação em todo o mundo. Dada a abrangência e complexidade dessa temática, a compreensão dos distintos aspectos relacionados ao tema exige que as abordagens teórico-metodológicas e empíricas sejam na direção da inter e da transdisciplinaridade, com estudos e pesquisas que contemplem contribuições de pesquisadores de diferentes áreas, tais como Ciência da Computação, Ciência Cognitiva, Engenharia, Administração, Direito, Linguística, Educação, Geografia, Ciências da Saúde, entre outras.' },

        {imageTitle: 'Informação em Pauta',
        imagePath:   '../../../assets/periodicos/ip.png',
         link: 'http://www.periodicos.ufc.br/index.php/informacaoempauta/index',
        imageDescription: 'Informação em Pauta é um periódico científico eletrônico do Departamento de Ciências da Informação e do Programa de Pós-Graduação em Ciência da Informação da Universidade Federal do Ceará (DECINF/PPGCI/UFC), disponível em Open Access. Tem como objetivo divulgar trabalhos que contribuam para o desenvolvimento, fortalecimento e crescimento da Ciência da Informação, Biblioteconomia e áreas afins, incentivando a produção de novos conhecimentos entre pesquisadores, docentes, discentes e demais profissionais de diferentes regiôes do país e no exterior. Com periodicidade semestral, o periódico publica contribuições inéditas em três idiomas: português, espanhol e inglês. As avaliações são realizadas às cegas, pelo Conselho Editorial e pelo Conselho Consultivo, e o fluxo de submissão é contínuo. Os artigos compreendem todas as modalidades dos estudos da área de Ciência da Informação, mas eventualmente algumas edições podem lançar edições especiais que tratem de temas mais específicos da área de estudo em questão.' },


      {imageTitle: 'Liinc em Revista',
      imagePath:   '../../../assets/periodicos/liin.png',
      link: 'http://revista.ibict.br/liinc',
      imageDescription: 'A Liinc em Revista é um periódico científico de acesso aberto de âmbito internacional e avaliação por pares, para a reflexão crítica sobre os processos de produção, circulação e apropriação da informação e do conhecimento, ante as transformações no mundo contemporâneo. A revista é indexada por Doaj, Latindex e Harvester e avaliada no Qualis da Capes. Liinc em Revista is an interdisciplinary, international peer-reviewed open journal of critical reflection on the processes of information and knowledge production, circulation and appropriation in a changing world. The journal is indexed by Doaj, Latindex e Harvester and evaluated in Capes Qualis.' },

    {imageTitle: 'Logeion: Filosofia da Informação',
     imagePath:  '../../../assets/periodicos/filosofia-da-informacao.png',
     link: 'http://revista.ibict.br/index.php/fiinf/index',
    imageDescription: 'A Revista Filosofia da Informação é uma publicação semestral, vinculada ao Grupo de Pesquisa Filosofia e Política de Informação do Instituto Brasileiro de Informação em Ciência e Tecnologia – IBICT. A fim de acolher a diversidade de abordagens teóricas e pontos de vista, a revista publica artigos, ensaios, originais e inéditos, nos idiomas português, espanhol e inglês.  ' },


    {imageTitle: 'Múltiplos olhares em Ciência da Informação',
     imagePath:  '../../../assets/periodicos/moci.png',
     link: 'http://portaldeperiodicos.eci.ufmg.br/index.php/moci/index',
    imageDescription: 'Múltiplos Olhares em Ciência da Informação é uma revista eletrônica, com publicação semestral de trabalhos inéditos relacionados à área de Ciência da Informação, abrangendo prioritariamente a Biblioteconomia, Arquivologia e Museologia, produzidos por alunos da graduação. Serão aceitos artigos oriundos de trabalhos de conclusão de curso, projetos de pesquisa, projetos de iniciação científica, relatos de atividades de monitoria, extensão e trabalhos de discentes apresentados em encontros científicos.' },


    {imageTitle: 'Perspectivas em Ciência da Informação',
     imagePath:  '../../../assets/periodicos/pci.png',
     link: 'http://portaldeperiodicos.eci.ufmg.br/index.php/pci',
    imageDescription: 'A revista Perspectivas em Ciência da Informação é uma publicação trimestral da Escola de Ciência da Informação da Universidade Federal de Minas Gerais. Foi lançada em 1996, em substituição à Revista da Escola de Biblioteconomia da UFMG.  Divulga artigos científicos, relatos de pesquisas, estudos teóricos, revisões de literatura, textos didáticos, relatos de experiências, traduções e resenhas nas áreas de Ciência da Informação, Arquivologia, Biblioteconomia, Museologia e áreas afins.'},


    {imageTitle: 'Revista ACB',
     imagePath:  '../../../assets/periodicos/acb.png',
     link: 'https://revista.acbsc.org.br/racb',
    imageDescription: 'A Revista ACB: Biblioteconomia em Santa Catarina é uma publicação quadrimestral de trabalhos inéditos relacionados na área da Biblioteconomia e Ciência da Informação, abrangendo especificamente a Biblioteconomia, Ciência da Informação, Arquivologia, Museologia e Documentação, ou textos que apresentem resultados de estudos e pesquisas sobre atividades relacionadas ao movimento associativo (classe dos bibliotecários).' },





            {imageTitle: 'RBBD. Revista Brasileira de Biblioteconomia e Documentação',
             imagePath:  '../../../assets/periodicos/rbbd.png',
             link: 'https://rbbd.febab.org.br/rbbd/index',
            imageDescription: 'Finalidade da RBBD: A Revista é o órgão oficial de comunicação da Federação Brasileira de Associações de Bibliotecários, Cientistas da Informação e Instituições- FEBAB e tem como finalidades: a) constituir-se em periódico especializado da área de Biblioteconomia, Ciência da Informação e conhecimentos afins; b) ser um veículo noticioso e informativo de eventos e feitos de associações e de outras instituições ligados à área; e, c) preservar a memória profissional e constituir instrumento para análises futuras. Escopo da RBBD 1.1 Tipos de Colaborações 1. A primeira seção da RBBD é constituída de: a) artigos técnico-científicos, produtos de válida experiência profissional e de pesquisa; b) comunicações prévias ou informes posteriores de pesquisa; c) revisões de uma área ou assunto, em uma determinada época ou anual; d) comunicações de natureza descritiva de cunho profissional, sobre processos, atividades, serviços, programas,dentre outros, relevantes e inovadoras; e, e) ensaios, documentários de uma época, de uma instituição, de um movimento biblioteconômico, etc. f) sistematizações, roteiros, modelos, etc. com fins didáticos; g) monografias (resumidas) de estudantes , consideradas de alto nível e de interesse para a área; e, h) traduções, imprescindíveis para a democratização de textos considerados de relevância para a área. 1.2 Outras seções: a) Legislação: normas e padronizações ( leis, decretos, portarias, etc.) , seguida de ementa e resumo, sempre que necessário; b) Reportagem e entrevista: pessoas e fatos em evidência de interesse ao fascículo em foco; c) Noticiário: notícias e informes diversos sobre as associações estaduais e regionais, conselhos, grupos de trabalho, organismos nacionais e internacionais, congressos, cursos e outros; d) Resenhas: de documentos considerados de relevância para a área e conhecimentos afins, conforme normas próprias da RBBD; e) Fontes de interesse para a área e de conhecimentos afins, em forma de links. 1.3 Escolha da matéria dos fascículos: A matéria da revista será encomendada a critério do editor e obedecendo planejamento anual.' },

            {imageTitle: 'BIBLOS',
             imagePath:  '../../../assets/periodicos/biblos.png',
             link: 'https://www.seer.furg.br/biblos/index',
            imageDescription: 'A BIBLOS - Revista do Instituto de Ciências Humanas e da Informação (ICHI), é um periódico de acesso aberto e não cobra taxa para submissões ou publicações. Trata-se de uma publicação semestral de trabalhos inéditos relacionados com a área da Ciência da Informação. Aceita trabalhos da área acima relacionada ou que apresentem resultados de estudos e pesquisas sobre as atividades do setor de informação em ciência e tecnologia.' },

            {imageTitle: 'RACIn: Revista Analisando em Ciência da Informação',
             imagePath:  '../../../assets/periodicos/racin.png',
             link: 'http://racin.arquivologiauepb.com.br/',
            imageDescription: 'A Revista Analisando em Ciência da Informação (RACIn) é uma publicação científica, em formato eletrônico, vinculada ao Centro de Ciências Biológicas e Sociais Aplicadas (CCBSA), que abriga o Curso de Bacharelado em Arquivologia, da Universidade Estadual da Paraíba (UEPB), dirigida a pesquisadores, professores, profissionais e estudantes das áreas de Arquivologia, Biblioteconomia, Computação, Comunicação, Museologia e que lidam com a informação.' },

            {imageTitle: 'Revista Digital de Biblioteconomia e Ciẽncia da Informação',
             imagePath:  '../../../assets/periodicos/rbci.png',
             link: 'http://www.sbu.unicamp.br/seer/ojs/index.php/rbci',
            imageDescription: 'A Revista Digital de Biblioteconomia e Ciência da Informação(RDBCI) é uma publicação quadrimestral vinculada ao Sistema de Bibliotecas da UNICAMP (SBU), tendo como foco divulgar trabalhos da área da Biblioteconomia e Ciência da Informação. Publica artigos inéditos, relatos de experiência, pesquisas em andamento e resenhas relacionados com a Ciência da informação ou que apresentem resultados de estudos e pesquisas sobre as atividades desta área. Adota em seu processo editorial a avaliação cega por pares, onde os trabalhos são encaminhados para especialistas para análise, atendendo aos critérios de sua política editorial.A revista compreende as áreas da Biblioteconomia, Ciência da Informação, e áreas afins como os da educação, administração, cultura e pesquisa, telecomunicações e informática. A Ciência da Informação é uma área interdisciplinar que estuda os fenômenos ligados à produção, organização, difusão e utilização de informações em todos os campos do saber.' },

            {imageTitle: 'Revista da Escola de Biblioteconomia da UFMG',
             imagePath:  '../../../assets/periodicos/reb.png',
             link: 'http://portaldeperiodicos.eci.ufmg.br/reb/',
            imageDescription: '' },

            {imageTitle: 'Revista Conhecimento em Ação',
             imagePath:  '../../../assets/periodicos/rca.png',
             link: 'https://revistas.ufrj.br/index.php/rca',
            imageDescription: 'A Revista Conhecimento em Ação (RCA) é uma publicação semestral do curso de Biblioteconomia e Gestão de Unidades de Informação (CBG) da Faculdade de Administração e Ciências Contábeis (FACC) da Universidade Federal do Rio de Janeiro (UFRJ). É um periódico das áreas de Biblioteconomia, Ciência da Informação  e áreas afins. Tem como missão proporcionar debates atualizados sobre questões de informação, no contexto da sociedade do aprendizado contínuo e assim contribuir para a disseminação e promoção de novos conhecimentos no campo da informação. Tem a participação de pesquisadores de universidades nacionais e estrangeiras, bem como de alunos de graduação e pós-graduação. Sendo a informação um elemento fundamental na sociedade contemporânea é importante possibilitar a discussão e o entendimento sobre temas como:  informação e conhecimento, cultura informacional, memória, tecnologias da informação, gestão de unidades de informação, usuários e usos da informação, comunicação e sistemas de aprendizagem,  inclusão digital e social, competências em informação, entre outros temas relevantes para o campo da informação.' },


            {imageTitle: 'Revista Brasileira de Ciência, Tecnologia e Sociedade',
             imagePath:  '../../../assets/periodicos/cts.png',
             link: 'http://www.revistabrasileiradects.ufscar.br/index.php/cts',
            imageDescription: 'A Revista Brasileira de Ciência, Tecnologia e Sociedade, em versão exclusivamente eletrônica, é uma publicação semestral do Grupo de Pesquisa Ciência, Tecnologia e Sociedade do Departamento de Ciência de Informação / Programa de Pós-Graduação em Ciência, Tecnologia e Sociedade da Universidade Federal de São Carlos. Foi criada com três objetivos básicos: a) dar vazão a produção científica que se avoluma, na área, nas universidades brasileiras e que, por falta de espaço de um veículo específico, não circula e, portanto, não é discutida, criticada e referenciada; b) estimular o debate acadêmico sobre a temática de Ciência, Tecnologia e Sociedade (CTS) em suas diferentes dimensões, valorizando, sobretudo, os diálogos interdisciplinares; c) contribuir, de forma decisiva, para a crítica e proposição de modelos de intervenção, pública ou privada, de natureza sustentável.' },

            {imageTitle: 'Revista Informação na Sociedade Contemporânea',
             imagePath:  '../../../assets/periodicos/risc.png',
             link: 'https://periodicos.ufrn.br/informacao',
            imageDescription: 'A Revista Informação na Sociedade Contemporânea (RISC) é uma publicação vinculada ao Departamento de Ciência da Informação e ao Programa de Pós-graduação em Gestão da Informação e do Conhecimento, da Universidade Federal do Rio Grande do Norte (UFRN). Foi criada com o objetivo de se configurar como um canal de socialização dos resultados de estudos e pesquisas realizados na área de Ciência da Informação, com ênfase nas temáticas desenvolvidas pelo Grupo de Pesquisa “Informação na Sociedade Contemporânea”.' },


            {imageTitle: 'Tendências da Pesquisa Brasileira em Ciência da Informação ',
             imagePath:  '../../../assets/periodicos/tpbci.png',
             link: 'http://inseer.ibict.br/ancib/index.php/tpbci/issue/archive',
            imageDescription: 'TENDÊNCIAS DA PESQUISA BRASILEIRA EM CIÊNCIA DA INFORMAÇÃO, lançada em 2008, é a revista mantida pela Associação Nacional de Pesquisa e Pós-Graduação em Ciência da Informação (ANCIB). Com periodicidade semestral, publica resultados de pesquisas brasileiras e estrangeiras na área de Ciência da Informação.' },

            {imageTitle: 'PHD Revista Photo & Documento',
             imagePath:  '../../../assets/periodicos/phd.png',
             link: 'http://gpaf.info/photoarch/index.php?journal=phd&page=issue&op=current',
            imageDescription: 'Fazem parte do escopo, especialmente, questões relativas às diferentes origens, à formação de diferentes modalidades de acervo, aos processos de institucionalização dos registros, à organização e à disponibilização do documento fotográfico, entre outros aspectos, destacando a importância desses processos para o uso administrativo, bem como a construção e manutenção de memórias. É esta abordagem o diferencial da revista, que propõe a construção de um cenário mais amplo, conformando a área que estamos denominando "Fotodocumentação", buscando agregar estudos relacionados a variadas disciplinas em um ambiente comum.' },
]



  /*initialImagePeriodicos = [
  {imagePath: '../../../assets/periodicos/Aletria.jpg', link: 'http://www.periodicos.letras.ufmg.br/index.php/aletria/index'},
  {imagePath: '../../../assets/periodicos/Arquivo-brasileiro-de-medicina-veterinária-e-zootecnia.jpg', link: 'http://www.scielo.br/scielo.php?script=sci_serial&pid=0102-0935&lng=en&nrm=iso'},
  {imagePath: '../../../assets/periodicos/Arquivos-em-odontologia.jpg', link: 'http://revodonto.bvsalud.org/scielo.php?script=sci_serial&pid=1516-0939&lng=pt'},
  {imagePath: '../../../assets/periodicos/Caderno-de-Ciências-Agrárias.jpg', link: 'https://seer.ufmg.br/index.php/ccaufmg'},
  {imagePath: '../../../assets/periodicos/Cadernos-Benjaminianos.jpg', link: 'http://www.periodicos.letras.ufmg.br/index.php/cadernosbenjaminianos/index'},
  {imagePath: '../../../assets/periodicos/Caderno-tecnico-de-veterinária-e-zootecnia.jpg', link: 'http://www.vet.ufmg.br/editora/cadernos_tecnicos/1_20090120153045'},
  {imagePath: '../../../assets/periodicos/Caligrama.jpg', link: 'http://www.periodicos.letras.ufmg.br/index.php/caligrama'},
  {imagePath: '../../../assets/periodicos/Construindo.jpg', link: 'http://www.fumec.br/revistas/construindo/index'},
  {imagePath: '../../../assets/periodicos/Contabilidade-vista-e-revista.jpg', link: 'http://revistas.face.ufmg.br/index.php/contabilidadevistaerevista'},
  {imagePath: '../../../assets/periodicos/Contextura.jpg', link: 'https://seer.ufmg.br/index.php/revistacontextura/index'},
  {imagePath: '../../../assets/periodicos/Devires.jpg', link: 'http://www.fafich.ufmg.br/devires/index.php/Devires'},
  {imagePath: '../../../assets/periodicos/Educação-em-revista.jpg', link: 'http://www.scielo.br/scielo.php?script=sci_serial&pid=0102-4698&lng=pt&nrm=iso/'},
  {imagePath: '../../../assets/periodicos/Em-tese.jpg', link: 'http://www.periodicos.letras.ufmg.br/index.php/emtese'},
  {imagePath: '../../../assets/periodicos/maaravi.jpg', link: 'http://www.periodicos.letras.ufmg.br/index.php/maaravi'},
  {imagePath: '../../../assets/periodicos/Verinotio.jpg', link: 'http://www.verinotio.org'},
  {imagePath: '../../../assets/periodicos/Vestígios.jpg', link: 'https://www.vestigios.org/'},
]; */




/*  initialImagePeriodicos = [
  '../../../assets/periodicos/Aletria.jpg',
  '../../../assets/periodicos/Arquivo-brasileiro-de-medicina-veterinária-e-zootecnia.jpg',
  '../../../assets/periodicos/Arquivos-em-odontologia.jpg',
  '../../../assets/periodicos/Caderno-de-Ciências-Agrárias.jpg',
  '../../../assets/periodicos/Cadernos-Benjaminianos.jpg',
  '../../../assets/periodicos/Caderno-tecnico-de-veterinária-e-zootecnia.jpg',
  '../../../assets/periodicos/Caligrama.jpg',
  '../../../assets/periodicos/Construindo.jpg',
  '../../../assets/periodicos/Contabilidade-vista-e-revista.jpg',
  '../../../assets/periodicos/Contextura.jpg',
  '../../../assets/periodicos/Devires.jpg',
  '../../../assets/periodicos/Educação-em-revista.jpg',
  '../../../assets/periodicos/Em-tese.jpg',
  '../../../assets/periodicos/maaravi.jpg',
  '../../../assets/periodicos/Verinotio.jpg',
  '../../../assets/periodicos/Vestígios.jpg'
]; */

}
