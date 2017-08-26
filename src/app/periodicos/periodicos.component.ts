import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-periodicos',
  templateUrl: './periodicos.component.html',
  styleUrls: ['./periodicos.component.css']
})
export class PeriodicosComponent implements OnInit {

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


          {imageTitle: '',
           imagePath:  '../../../assets/periodicos/',
           link: '',
          imageDescription: '' },


          {imageTitle: '',
           imagePath:  '../../../assets/periodicos/',
           link: '',
          imageDescription: '' },

          {imageTitle: '',
           imagePath:  '../../../assets/periodicos/',
           link: '',
          imageDescription: '' },

          {imageTitle: '',
           imagePath:  '../../../assets/periodicos/',
           link: '',
          imageDescription: '' },

          {imageTitle: '',
           imagePath:  '../../../assets/periodicos/',
           link: '',
          imageDescription: '' },

          {imageTitle: '',
           imagePath:  '../../../assets/periodicos/',
           link: '',
          imageDescription: '' },

          {imageTitle: '',
           imagePath:  '../../../assets/periodicos/',
           link: '',
          imageDescription: '' },

          {imageTitle: '',
           imagePath:  '../../../assets/periodicos/',
           link: '',
          imageDescription: '' },

  {imageTitle: '',
   imagePath:  '../../../assets/periodicos/',
   link: 'http://www.seer.furg.br/ojs/index.php/biblos/index',
  imageDescription: '' },

  {imageTitle: '',
   imagePath:  '../../../assets/periodicos/',
   link: 'http://www.revistabrasileiradects.ufscar.br/',
  imageDescription: '' },

  {imageTitle: '',
   imagePath:  '../../../assets/periodicos/',
   link: 'http://www.abecin.org.br/revista/index.php/rebecin/index',
  imageDescription: '' },

  {imageTitle: '',
   imagePath:  '../../../assets/periodicos/',
   link: 'http://www.sbc.org.br/index.php?language=1&subject=100',
  imageDescription: '' },

  {imageTitle: '',
   imagePath:  '../../../assets/periodicos/',
   link: 'https://revistas.ufrj.br/index.php/rca',
  imageDescription: '' },

  {imageTitle: '',
   imagePath:  '../../../assets/periodicos/',
   link: 'http://portaldeperiodicos.eci.ufmg.br/reb/',
  imageDescription: '' },

  {imageTitle: '',
   imagePath:  '../../../assets/periodicos/',
   link: 'http://164.41.105.3/portalnesp/ojs-2.1.1/index.php/RBB',
  imageDescription: '' },

  {imageTitle: '',
   imagePath:  '../../../assets/periodicos/',
   link: 'http://www.sbu.unicamp.br/seer/ojs/index.php/rbci',
  imageDescription: '' },



    {imageTitle: '',
     imagePath:  '../../../assets/periodicos/',
     link: 'http://www.revistabrasileiradects.ufscar.br/',
    imageDescription: '' },


    {imageTitle: '',
     imagePath:  '../../../assets/periodicos/',
     link: 'http://www.siglinux.nce.ufrj.br/~gtbib/site/',
    imageDescription: '' },



    {imageTitle: '',
     imagePath:  '../../../assets/periodicos/',
     link: 'https://periodicos.ufrn.br/informacao',
    imageDescription: '' },

    {imageTitle: '',
     imagePath:  '../../../assets/periodicos/',
     link: 'http://gpaf.info/photoarch/index.php?journal=phd&page=issue&op=current',
    imageDescription: '' },


      {imageTitle: '',
       imagePath:  '../../../assets/periodicos/',
       link: 'http://inseer.ibict.br/ancib/index.php/tpbci/issue/archive',
      imageDescription: '' },


        {imageTitle: '',
         imagePath:  '../../../assets/periodicos/',
         link: '',
        imageDescription: '' },



  {imageTitle: 'Arquivos em odontologia',
   imagePath:  '../../../assets/periodicos/Arquivos-em-odontologia.jpg',
   link: 'http://revodonto.bvsalud.org/scielo.php?script=sci_serial&pid=1516-0939&lng=pt',
  imageDescription: 'Periódico trimestral publicado ininterruptamente desde 1964. Vinculado ao Programa de Pós-Graduação em Odontologia, visa a promover e divulgar a produção intelectual no campo da saúde e da educação em Odontologia, e áreas afins, aceitando artigos originais de pesquisa básica e aplicada. ' },

  {imageTitle: 'Caderno de Ciências Agrárias',
   imagePath:  '../../../assets/periodicos/Caderno-de-Ciências-Agrárias.jpg',
   link: 'https://seer.ufmg.br/index.php/ccaufmg',
   imageDescription: 'Publicação quadrimestral vinculada ao Instituto de Ciências Agrárias da UFMG. Tem interesse na publicação de artigos inéditos nas áreas de Ciências Agrárias e áreas correlatas. ' },

  {imageTitle: 'Cadernos Benjaminianos',
   imagePath:  '../../../assets/periodicos/Cadernos-Benjaminianos.jpg',
   link: 'http://www.periodicos.letras.ufmg.br/index.php/cadernosbenjaminianos/index',
  imageDescription: '' },

  {imageTitle: 'Caderno técnico de veterinária e zootecnia',
   imagePath:  '../../../assets/periodicos/Caderno-tecnico-de-veterinária-e-zootecnia.jpg',
   link: 'http://www.vet.ufmg.br/editora/cadernos_tecnicos/1_20090120153045',
   imageDescription: 'Publicação semestral do Núcleo Walter Benjamin, sediado na Faculdade de Letras da UFMG, que busca contribuir para o diálogo acadêmico sobre a obra de Walter Benjamin e temas afins.' },

  {imageTitle: 'Caligrama',
   imagePath:  '../../../assets/periodicos/Caligrama.jpg',
   link: 'http://www.periodicos.letras.ufmg.br/index.php/caligrama',
   imageDescription: 'Periódico semestral mantido pela Faculdade de Letras da UFMG desde 1981. Tem como missão fomentar a produção científica na área de Línguas e Literaturas Românicas. Ao final do primeiro semestre de cada ano é publicado um número dedicado a estudos literários e ao final do segundo semestre um número dedicado a estudos linguísticos.' },

  {imageTitle: 'Construindo',
   imagePath:  '../../../assets/periodicos/Construindo.jpg',
   link: 'http://www.fumec.br/revistas/construindo/index',
   imageDescription: 'Publicação científica semestral conjunta da Escola de Engenharia da UFMG, Faculdade de Engenharia e Arquitetura da Universidade FUMEC e Faculdade de Engenharia da Universidade do Porto. Seu principal objetivo é divulgar a produção científica, através da publicação de artigos de pesquisadores na área da Engenharia Civil. ' },

  {imageTitle: 'Contabilidade Vista & Revista',
   imagePath:  '../../../assets/periodicos/Contabilidade-vista-e-revista.jpg',
   link: 'http://revistas.face.ufmg.br/index.php/contabilidadevistaerevista',
   imageDescription: 'Periódico quadrimestral vinculado ao Departamento de Ciências Contábeis da FACE. Objetiva publicar e divulgar pesquisas teóricas e aplicadas para fomentar o conhecimento na área de Contabilidade, Controladoria e Finanças. ' },

  {imageTitle: 'ConTextura',
   imagePath:  '../../../assets/periodicos/Contextura.jpg',
   link: 'https://seer.ufmg.br/index.php/revistacontextura/index',
  imageDescription: 'Periódico semestral de iniciativa do corpo discente de Filosofia da UFMG. A revista tem por finalidades: proporcionar um espaço para publicação de produção intelectual e divulgação de pesquisas na área de filosofia e propiciar, por meio da publicação de textos, a reflexão e o debate acerca de temas de relevância filosófica. ' },

  {imageTitle: 'Devires – Cinema e Humanidades',
   imagePath:  '../../../assets/periodicos/Devires.jpg',
   link: 'http://www.fafich.ufmg.br/devires/index.php/Devires',
  imageDescription: ' Publicação semestralmente em conjunto pelos programas de pós-graduação em Comunicação e Antropologia da Fafich. A Revista procura associar os estudos do cinema ao domínio das Humanidades, em busca de uma interlocução entre as diferentes abordagens que tratam a escritura do filme em sua relação com as múltiplas formas de vida.' },

  {imageTitle: 'Educação em Revista',
   imagePath:  '../../../assets/periodicos/Educação-em-revista.jpg',
   link: 'http://www.scielo.br/scielo.php?script=sci_serial&pid=0102-4698&lng=pt&nrm=iso/',
  imageDescription: 'Publicação trimestral do Programa de Pós-Graduação em Educação da Faculdade de Educação (FAE) que tem como objetivo divulgar conhecimentos científicos produzidos no campo da Educação. Publica artigos inéditos que trazem uma efetiva contribuição para o avanço da pesquisa educacional. ' },

  {imageTitle: 'Em Tese',
   imagePath:  '../../../assets/periodicos/Em-tese.jpg',
   link: 'http://www.periodicos.letras.ufmg.br/index.php/emtese',
  imageDescription: 'Periódico quadrimestral do Programa de Pós-Graduação em Estudos Literários (Pós-Lit) da FALE-UFMG, dedicado a divulgar produções e pesquisas nas áreas de Estudos Literários e de Artes. A revista aceita submissões de textos que contemplem as áreas de Literatura Brasileira, Literaturas Clássicas e Medievais, Literaturas de Língua Inglesa, Literaturas Modernas e Contemporâneas, Teoria da Literatura e Literatura Comparada. ' },

  {imageTitle: 'Arquivo Maaravi: Revista Digital de Estudos Judaicos da UFMG',
   imagePath:  '../../../assets/periodicos/maaravi.jpg',
   link: 'http://www.periodicos.letras.ufmg.br/index.php/maaravi',
  imageDescription: 'Periódico semestral dedicado à publicação de artigos inéditos, resenhas, traduções e trabalhos artísticos da área de Estudos Judaicos. ' },

  {imageTitle: 'Verinotio',
   imagePath:  '../../../assets/periodicos/Verinotio.jpg',
   link: 'http://www.verinotio.org',
  imageDescription: 'Periódico semestral exclusivamente virtual e vinculado ao Grupo de Pesquisa Marxologia – Filosofia e Estudos Confluentes da UFMG. O propósito de Verinotio é difundir produções teóricas e estabelecer intercâmbio entre grupos de pesquisas e investigadores individuais que atuem no campo do marxismo, do humanismo e de concepções filosóficas afins e que desenvolvam reflexões críticas. ' },

  {imageTitle: 'Vestígios - Revista Latino-Americana de Arqueologia Histórica',
   imagePath:  '../../../assets/periodicos/Vestígios.jpg',
   link: 'https://www.vestigios.org/',
  imageDescription: 'Publicação semestral vinculada ao Laboratório de Estudos Antárticos em Ciências Humanas da FAFICH que busca viabilizar um espaço de aproximação e interação entre pesquisadores que trabalham com esta temática. A revista aborda tanto questões teórico-metodológicas quanto estudos de caso em Arqueologia Histórica Latino-Americana. ' },

  {imageTitle: 'Ensaio Pesquisa em Educação em Ciências',
   imagePath:  '../../../assets/periodicos/Ensaio.jpg',
   link: 'http://www.scielo.br/scielo.php?script=sci_serial&pid=1983-2117',
  imageDescription: 'Periódico quadrimestral que publica artigos de pesquisa inéditos de interesse ao campo da Educação em Ciências atendendo a um público de pesquisadores e estudantes de pós-graduação das áreas de Educação Científica, Ensino das Ciências da Natureza, da Educação em Saúde e Ambiental e, ainda, a um público das licenciaturas no campo das Ciências Naturais, de áreas afins e outros profissionais da Educação Básica envolvidos com a educação em ciências. ' },

  {imageTitle: 'Varia História',
   imagePath:  '../../../assets/periodicos/Varia-Historia.jpg',
   link: 'http://www.scielo.br/scielo.php?script=sci_serial&pid=0104-8775&lng=en&nrm=iso',
  imageDescription: 'Publicação quadrimestral vinculada ao Departamento de História da UFMG que privilegia a publicação de artigos de História, visando constituir-se em um lócus de diálogo internacionalizado e multicultural de pesquisadores das várias áreas do conhecimento histórico. Varia Historia é uma expressão latina por meio da qual a revista deseja se afirmar como um veículo para a diversidade e variedade da historiografia contemporânea. ' },

  {imageTitle: 'Farol – Revista de Estudos Organizacionais e Sociedade',
   imagePath:  '../../../assets/periodicos/Farol.jpg',
   link: 'http://www.scielo.br/scielo.php?script=sci_serial&pid=0104-8775&lng=en&nrm=iso',
  imageDescription: 'Periódico científico quadrimestral do Núcleo de Estudos Organizacionais e Sociedade da Faculdade de Ciências Econômicas da UFMG. Busca fomentar, propagar e contribuir para os estudos organizacionais em uma ótica não-funcionalista. ' },

  {imageTitle: 'Fórum Patrimônio',
   imagePath:  '../../../assets/periodicos/Fórum-patrimônio.jpg',
   link: 'http://www.forumpatrimonio.com.br/seer/index.php/forum_patrimonio/index',
  imageDescription: 'Publicação semestral vinculada a Escola de Arquitetura, tem por objetivo o debate em profundidade de questões relacionadas ao desenvolvimento sustentável, através da publicação de contribuições técnicas e científicas originais, abordando em especial o meio-ambiente e o patrimônio cultural e natural.' },

  {imageTitle: 'GeoGrafias',
   imagePath:  '../../../assets/periodicos/Geografias.jpg',
   link: 'http://www.igc.ufmg.br/portaldeperiodicos/index.php/geografias',
  imageDescription: 'Periódico semestral, define o seu perfil editorial a partir das linhas de pesquisa vigentes no Departamento de Geografia da UFMG. Temáticas correlatas, originárias do interior da ciência geográfica, também são de interesse do periódico, assim como outras temáticas originárias do contato da Ciência Geográfica com os demais campos do saber são, também, de interesse da Geografias. ' },

  {imageTitle: 'Gerais: Revista Interinstitucional de Psicologia',
   imagePath:  '../../../assets/periodicos/Gerais-Revista-Interinstitucional-de-Psicologia.jpg',
   link: 'http://www.fafich.ufmg.br/gerais/index.php/gerais/index',
  imageDescription: 'Periódico on-line, publicado semestralmente pelas universidades federais sediadas no Estado de Minais Gerais que possuem curso de Psicologia. O objetivo da revista é difundir e debater os avanços em Psicologia, publicando trabalhos originais na forma de relatos de pesquisa, estudos teóricos, relatos de experiência, resenhas e notas técnicas referentes ao campo da Psicologia e áreas afins. ' },

  {imageTitle: 'Gestão e Sociedade',
   imagePath:  '../../../assets/periodicos/Gestão-e-Sociedade.jpg',
   link: 'https://www.gestaoesociedade.org/gestaoesociedade',
  imageDescription: 'Revista eletrônica com publicação quadrimestral, editorada pelo Centro de Pós-Graduação e Pesquisas em Administração da Faculdade de Ciências Econômicas da UFMG. Sua missão é a divulgação de trabalhos acadêmicos, científicos e técnicos ligados à gestão, bem como sua reflexão no contexto da sociedade contemporânea. ' },

  {imageTitle: 'Trabalho & Educação',
   imagePath:  '../../../assets/periodicos/Trabalho-e-educação.jpg',
   link: 'http://www.portal.fae.ufmg.br/revistas/index.php/trabedu',
  imageDescription: 'Publicação quadrimestral que tem como objetivo favorecer o intercâmbio entre os pesquisadores do campo Trabalho e Educação e de diversas áreas de conhecimento e seus respectivos eixos temáticos em âmbito nacional e internacional, além de estimular os vínculos destes campos de pesquisa com a sociedade civil. ' },

  {imageTitle: 'Kriterion',
   imagePath:  '../../../assets/periodicos/Kriterion.jpg',
   link: 'http://www.scielo.br/scielo.php?script=sci_serial&pid=0100-512X&lng=en&nrm=iso',
  imageDescription: 'Periódico semestral do Departamento de Filosofia da UFMG e tem como objetivo principal publicar artigos em Filosofia ou que tenham relevância filosófica, assim como fazer um intercâmbio de publicações de textos filosóficos de pesquisadores do Brasil e do exterior. ' },

  {imageTitle: 'Lamparina: Revista de Ensino de Teatro ',
   imagePath:  '../../../assets/periodicos/Lamparina.jpg',
   link: 'https://www.eba.ufmg.br/lamparina/index.php/revista',
 imageDescription: 'Publicação semestral da área de Teatro da EBA/UFMG. Destina-se a publicação de artigos originais, resenhas de livros e entrevistas relativas ao ensino do Teatro em submissão contínua. Recebe e publica, mediante avaliação, resumos expandidos sobre projetos, grupos e centros de pesquisa, para divulgação. ' },

  {imageTitle: 'Latin American Journal of Telehealth',
   imagePath:  '../../../assets/periodicos/Latin-American-Journal-of-Telehealth.jpg',
   link: 'http://cetes.medicina.ufmg.br/revista/index.php/rlat/index',
  imageDescription: 'A publicação tem periodicidade quadrimestral e é de responsabilidade da Faculdade de Medicina da UFMG, da Secretaria Municipal de Saúde de Belo Horizonte e do Laboratório de Excelência e Inovação em Telessaúde. Tem por objetivos publicar trabalhos técnicos e científicos da área, elaborados por autores nacionais e estrangeiros, desde que atendam às normas de publicação.' },

  {imageTitle: 'Licere',
   imagePath:  '../../../assets/periodicos/Licere.jpg',
   link: 'https://seer.ufmg.br/index.php/licere/index',
  imageDescription: 'Revista editada pelo Programa de Pós-Graduação Interdisciplinar em Lazer da UFMG, de periodicidade trimestral, sem fins lucrativos. Está aberta para receber contribuições de profissionais das mais diferentes áreas de atuação e formação, desde que tenham o intuito de contribuir para o avançar da discussão sobre o Lazer em nosso contexto. ' },

  {imageTitle: 'Lundiana: International Journal of Biodiversity ',
   imagePath:  '../../../assets/periodicos/Lundiana.jpg',
   link: 'https://www2.icb.ufmg.br/lundiana/',
 imageDescription: 'Periódico semestral do Instituto de Ciências Biológicas que publica artigos originais de pesquisas que lidam com as áreas da biogeografia, conservação, ecologia, evolução, sistemática e taxonomia de organismos de regiões tropicais e ecossistemas relacionados. Os manuscritos podem ser publicados como artigos completos ou comunicações breves. ' },

  {imageTitle: 'Memorandum',
   imagePath:  '../../../assets/periodicos/Memorandum.jpg',
   link: 'https://seer.ufmg.br/index.php/memorandum',
  imageDescription: 'Revista eletrônica semestral pertencente ao Departamento de Psicologia - FAFICH/UFMG e ao Departamento de Psicologia da Faculdade de Filosofia, Ciências e Letras de Ribeirão Preto/USP. Surge como um espaço de debate sobre memória e história no campo da Psicologia, suas especificidades e relações. ' },

  {imageTitle: 'Mosaico: Estudos em Psicologia',
   imagePath:  '../../../assets/periodicos/Mosaico.jpg',
   link: 'https://seer.ufmg.br/index.php/mosaico/issue/archive',
  imageDescription: 'Periódico científico semestral editado pelo Centro Acadêmico de Psicologia da FAFICH - UFMG. Tem por objetivo incentivar a produção científica na graduação, servindo como amplo espaço de visibilidade das diversas abordagens, métodos, teorias e intervenções em Psicologia. Preza por um corpo editorial formado por alunos de graduação e um conselho consultivo formado por professores-pesquisadores. ' },

  {imageTitle: 'Múltiplos Olhares em Ciência da Informação',
   imagePath:  '../../../assets/periodicos/Multiplos-olhares.jpg',
   link: 'http://portaldeperiodicos.eci.ufmg.br/index.php/moci',
  imageDescription: 'Revista eletrônica, com publicação semestral de trabalhos inéditos relacionados à área de Ciência da Informação – abrangendo prioritariamente a Biblioteconomia, Arquivologia e Museologia, produzidos por alunos da graduação. ' },

  {imageTitle: 'Texto Livre: Linguagem e Tecnologia',
   imagePath:  '../../../assets/periodicos/Texto-livre.jpg',
   link: 'http://www.periodicos.letras.ufmg.br/index.php/textolivre/index',
  imageDescription: 'Periódico semestral mantido pela Faculdade de Letras da UFMG que publica artigos científicos, resenhas e ensaios tendo como temática a relação interdisciplinar entre linguagem e tecnologias digitais. Busca fomentar a produção científica na área de Estudos de Linguagem, em especial análise, prática e ensino de produção textual com uso de novas tecnologias livres, além de estudos sobre documentação e divulgação de software livre. ' },

  {imageTitle: 'Nova Economia',
   imagePath:  '../../../assets/periodicos/Nova-Economia.jpg',
   link: 'http://www.scielo.br/scielo.php?script=sci_serial&pid=0103-6351&lng=en&nrm=iso',
  imageDescription: 'Revista quadrimestral editada pelo Departamento de Ciências Econômicas da UFMG. Criada em 1990, publica artigos e resenhas de Economia Teórica e Aplicada e áreas afins. Seguindo a tradição acadêmica do departamento, Nova Economia adota uma orientação pluralista, abrindo-se às diferentes correntes de pensamento econômico e orientações de pesquisa. ' },

  {imageTitle: 'Nuntius Antiquus',
   imagePath:  '../../../assets/periodicos/Nuntius-Antiquus.jpg',
   link: 'http://www.periodicos.letras.ufmg.br/index.php/nuntius_antiquus',
  imageDescription: 'Periódico semestral mantido pela Faculdade de Letras da Universidade Federal de Minas Gerais desde 2008. Publica artigos científicos tendo como temática culturas e literaturas da Antiguidade e da Idade Média. Tem como missão fomentar a produção científica na área de estudos clássicos e medievais, permitindo a pesquisadores do Brasil e do exterior divulgarem suas pesquisas e contribuírem para o debate e o progresso científico na área. ' },

  {imageTitle: 'O Eixo e a Roda: Revista de Literatura Brasileira ',
   imagePath:  '../../../assets/periodicos/O-eixo-e-a-roda.jpg',
   link: 'http://www.periodicos.letras.ufmg.br/index.php/o_eixo_ea_roda/index',
  imageDescription: 'Periódico semestral mantido pela Faculdade de Letras da Universidade Federal de Minas Gerais desde 1982. Tem como objetivo fomentar a produção teórica, crítica e ensaística na área de Literatura Brasileira, dando a oportunidade para que pesquisadores do Brasil e do exterior divulguem suas pesquisas e contribuam para o debate qualificado nesta área de estudos. ' },

  {imageTitle: 'Outramargem: Revista de Filosofia',
   imagePath:  '../../../assets/periodicos/Outra-margem.jpg',
   link: 'https://outramargem.com/',
  imageDescription: 'Publicação eletrônica semestral fundada por iniciativa de discentes do Programa de Pós-Graduação em Filosofia da Universidade Federal de Minas Gerais. O principal objetivo é divulgar pesquisas de pós-graduandos, nacionais e internacionais, no âmbito da Filosofia e áreas afins, promovendo o intercâmbio entre os pesquisadores por meio de artigos, resenhas, traduções e entrevistas. ' },

  {imageTitle: 'PER MUSI – Revista Acadêmica de Música',
   imagePath:  '../../../assets/periodicos/Per-Musi.jpg',
   link: 'http://www.scielo.br/scielo.php?script=sci_serial&pid=1517-7599&lng=en&nrm=iso',
  imageDescription: 'Periódico semestral que objetiva publicar artigos científicos em português, inglês e espanhol bem estruturados e fundamentados, que constituam contribuições relevantes para as diversas subáreas da música. Eventualmente, PER MUSI publica partituras, resenhas e entrevistas relacionadas à pesquisa em Música. A submissão de trabalho é contínua, ao longo de todo o ano. ' },

  {imageTitle: 'Perspectivas em Ciência da Informação',
   imagePath:  '../../../assets/periodicos/Perspectivas.jpg',
   link: 'http://www.scielo.br/scielo.php?script=sci_serial&pid=1413-9936&lng=en&nrm=iso',
  imageDescription: 'Publicação trimestral da Escola de Ciência da Informação da UFMG. Foi lançada em 1996, em substituição à Revista da Escola de Biblioteconomia da UFMG. Divulga relatos de pesquisa, estudos teóricos, revisões de literatura, textos didáticos, relatos de experiências, traduções e resenhas em Ciência da Informação, Biblioteconomia e áreas afins. ' },

  {imageTitle: 'PÓS: Revista do Programa de Pós-Graduação em Artes ',
   imagePath:  '../../../assets/periodicos/Pos.jpg',
   link: 'https://www.eba.ufmg.br/revistapos/index.php/pos',
  imageDescription: 'Revista do Programa de Pós-Graduação em Artes da Escola de Belas Artes – EBA, de publicação eletrônica e impressa semestralmente. A revista tem caráter científico e acadêmico com interesse na publicação de artigos inéditos vinculados às linhas e/ou grupos de pesquisa da EBA, considerando a área de concentração do Programa Arte e Tecnologia da Imagem. ' },

  {imageTitle: 'RAHIS – Revista de Administração Hospitalar e Inovação em Saúde',
   imagePath:  '../../../assets/periodicos/Rahis.jpg',
   link: 'http://revistas.face.ufmg.br/index.php/rahis',
  imageDescription: 'Periódico trimestral que objetiva publicar e divulgar, por meio eletrônico e impresso, pesquisas teóricas e aplicadas para fomentar o conhecimento na área de Administração, Administração Hospitalar e o setor da Saúde. ' },

  {imageTitle: 'REME – Revista Mineira de Enfermagem',
   imagePath:  '../../../assets/periodicos/Reme.jpg',
   link: 'http://www.reme.org.br/Home',
  imageDescription: 'Publicação continuada, técnico-científica, da Escola de Enfermagem da Universidade Federal de Minas Gerais que tem por finalidade contribuir para divulgação, acesso e utilização do conhecimento produzido em Enfermagem e áreas correlatas, abrangendo a Educação, a pesquisa e a atenção à saúde. ' },

  {imageTitle: 'ReVeLe: Revista Virtual dos Estudantes de Letras',
   imagePath:  '../../../assets/periodicos/Revele.jpg',
   link: 'http://www.periodicos.letras.ufmg.br/index.php/revele/index',
  imageDescription: 'Revista anual que objetiva contribuir com a divulgação dos trabalhos de pesquisa realizados pelos alunos da pós-graduação e da graduação. O volume traz estudos centrados em várias temáticas das duas grandes áreas: a Linguística (teórica, descritiva e aplicada) e os Estudos Literário' },

  {imageTitle: 'Revista Brasileira de Estudos do Lazer',
   imagePath:  '../../../assets/periodicos/RBEL.jpg',
   link: 'https://seer.ufmg.br/index.php/rbel',
  imageDescription: 'Publicação quadrimestral da Associação Brasileira de Pesquisa e Pós-Graduação em Estudos do Lazer (ANPEL), sem fins lucrativos, que objetiva divulgar a produção científica nacional e internacional sobre o Lazer e temas afins' },

  {imageTitle: 'Revista Brasileira de Estudos Políticos',
   imagePath:  '../../../assets/periodicos/Revista-Brasileira-de-Estudos-Políticos.jpg',
   link: 'http://www.pos.direito.ufmg.br/rbep/index.php/rbep/index',
  imageDescription: 'Periódico semestral, lançado em 1956, possui linha editorial temático-transdisciplinar. O foco da revista radica-se nos fenômenos sociais do poder e do Estado, que podem ser abordados das mais diversas maneiras, nas áreas da Ciência Política, Teoria do Direito e do Estado, Filosofia Social e do Direito e Economia Política, perpassando conteúdos da Sociologia, da História e da Antropologia.' },

  {imageTitle: 'Revista Brasileira de Linguistica Aplicada',
   imagePath:  '../../../assets/periodicos/Revista-Brasileira-de-Linguística-Aplicada.jpg',
   link: 'http://www.scielo.br/scielo.php?script=sci_serial&pid=1984-6398&lng=en&nrm=iso',
  imageDescription: 'Publicação sem fins lucrativos de responsabilidade do Programa de Pós-Graduação em Estudos Linguísticos, foi criada em 2001. É um periódico trimestral com avaliação por pares que tem a missão de incentivar a pesquisa na área de Linguística Aplicada' },

  {imageTitle: 'Revista da Faculdade de Direito da Universidade Federal de Minas Gerais',
   imagePath:  '../../../assets/periodicos/Revista-da-Faculdade-de-Direito.jpg',
   link: 'https://www.direito.ufmg.br/revista/index.php/revista',
  imageDescription: 'Publicação semestral que tem como objetivo primordial veicular artigos de colaboradores nacionais e internacionais. Pretende divulgar os resultados de pesquisas científicas desenvolvidas nas instituições do Brasil, bem como possibilitar o acesso a contribuições, acerca da mais diversas áreas do conhecimento jurídico, realizadas em universidades estrangeiras. ' },

  {imageTitle: 'Revista de Estudos da Linguagem',
   imagePath:  '../../../assets/periodicos/Revista-de-Estudos-da-Linguagem.jpg',
   link: 'http://periodicos.letras.ufmg.br/index.php/relin',
  imageDescription: 'Publicação quadrimestral vinculada ao Programa de Pós-Graduação em Estudos Linguísticos da Faculdade de Letras que tem como missão fomentar a produção científica na área de Teoria e Análise Linguística, permitindo aos pesquisadores do Brasil e do exterior divulgarem suas pesquisas e contribuírem para o debate e o progresso científico na área. A revista recebe submissões eletrônicas em fluxo contínuo. ' },

  {imageTitle: 'Revista do Centro Acadêmico Afonso Pena',
   imagePath:  '../../../assets/periodicos/Revista-do-CAAP.jpg',
   link: 'https://www2.direito.ufmg.br/revistadocaap/index.php/revista',
  imageDescription: 'Publicação semestral vinculada à Faculdade de Direito que objetiva contribuir para o engrandecimento da cultura jurídica nacional, para a democratização do conhecimento, de acesso público e gratuito, e para o desenvolvimento de novos pesquisadores. O Conselho Científico, responsável pela avaliação dos trabalhos a ela submetidos, é composto por professores ou pesquisadores que tenham a titulação de doutor.' },

  {imageTitle: 'Revista do Centro de Estudos Portugueses',
   imagePath:  '../../../assets/periodicos/Revista-do-Centro-de-Estudos-Portugueses.jpg',
   link: 'http://www.periodicos.letras.ufmg.br/index.php/cesp/index',
  imageDescription: 'Publicação semestral que busca fomentar a produção teórica, crítica e ensaística na área de Literatura Portuguesa, dando a oportunidade para que pesquisadores do Brasil e do exterior divulguem suas pesquisas e contribuam para o debate qualificado nesta área de estudos. Destaca-se como um dos poucos periódicos brasileiros destinados a difundir a produção acadêmica e a reflexão crítica estritamente sobre a literatura portuguesa. ' },

  {imageTitle: 'Revista Geonomos',
   imagePath:  '../../../assets/periodicos/Revista-Geonomos.jpg',
   link: 'http://www.igc.ufmg.br/portaldeperiodicos/index.php/geonomos/index',
  imageDescription: 'Publicação semestral vinculada ao Centro de Pesquisa Professor Manoel Teixeira da Costa do Instituto de Geociências da UFMG e objetiva a divulgação de produção científica original, de interesse amplo, relacionada às Geociências. A Geonomos publica artigos, discussões, notas técnicas e científicas de cunho geocientífico. ' },

  {imageTitle: 'Revista Médica de Minas Gerais',
   imagePath:  '../../../assets/periodicos/Revista-Médica-de-Minas-Gerais.jpg',
   link: 'http://rmmg.org/home',
  imageDescription: 'Publicação trimestral que possui entre seus objetivos possibilitar e incentivar o intercâmbio e a divulgação do conhecimento médico produzido no Estado de Minas Gerais e outras regiões, constituindo-se em veículo de interação interinstitucional nos âmbitos regional, nacional e internacional. ' },

  {imageTitle: 'Revista Multiface Online',
   imagePath:  '../../../assets/periodicos/Revista-Multiface.jpg',
   link: 'http://revistas.face.ufmg.br/index.php/multiface',
  imageDescription: 'Publicação anual organizada pelos alunos do Programa de Educação Tutorial (PET) da Faculdade de Ciências Econômicas da UFMG que pretende oferecer um espaço para publicação de trabalhos de alunos da graduação. As publicações consistem em trabalhos relacionados às áreas de Administração, Economia e Relações Econômicas Internacionais. ' },

  {imageTitle: 'Revista Três […] Pontos',
   imagePath:  '../../../assets/periodicos/Revista-Três-Pontos.jpg',
   link: 'https://seer.ufmg.br/index.php/revistatrespontos',
  imageDescription: 'Publicação semestral, do Centro Acadêmico de Ciências Sociais da Universidade Federal de Minas Gerais, destinada a estimular a produção de conhecimentos científicos de graduandos e promover o debates sobre os temas de interesse das Ciências Sociais. É uma iniciativa de estudantes da UFMG e tem abrangência ampla e plural no que diz respeito a posições científicas e político-ideológicas. ' },

  {imageTitle: 'Temporalidades – Revista Discente do Programa de Pós-Graduação em História',
   imagePath:  '../../../assets/periodicos/Temporalidades.jpg',
   link: 'https://seer.ufmg.br/index.php/temporalidades/index',
  imageDescription: 'Periódico semestral dos alunos de Pós-Graduação do Departamento de História da UFMG. Trata-se de um espaço voltado para a publicação de trabalhos originais produzidos por pesquisadores da área de História, ou que com ela dialogam, sem restrição de titulação, apesar de voltar-se, preferencialmente, para um público constituído por alunos de pós-graduação de todo o Brasil e também do exterior. ' },

  {imageTitle: 'Teoria & Sociedade',
   imagePath:  '../../../assets/periodicos/Teoria-e-Sociedade.jpg',
   link: 'http://www.fafich.ufmg.br/revistasociedade/index.php/rts/index',
  imageDescription: 'Periódico semestral vinculado aos departamentos de Antropologia e Arqueologia, Ciência Política e Sociologia da Faculdade de Filosoﬁa e Ciências Humanas da UFMG. É destinado a veicular trabalhos teóricos e empíricos sobre temas de interesse das áreas das ciências sociais em suas múltiplas vertentes intelectuais. ' },

  {imageTitle: 'Bibliotecas Universitárias: Pesquisas, Experiências e Perspectivas ',
   imagePath:  '../../../assets/periodicos/Bibliotecas-Universitárias.jpg',
   link: 'https://seer.ufmg.br/index.php/revistarbu/',
  imageDescription: 'Publicação semestral editada pela Biblioteca Universitária da UFMG, voltada para pesquisadores e profissionais de informação. Sua missão é difundir o conhecimento teórico e prático em Biblioteconomia e Ciência da Informação, além de temas pertinentes às bibliotecas universitárias. ' },

  {imageTitle: 'Interfaces: Revista de Extensão da UFMG',
   imagePath:  '../../../assets/periodicos/Interfaces.jpg',
   link: 'https://www.ufmg.br/proex/revistainterfaces/index.php/IREXT/index',
  imageDescription: ' Publicação semestral mantida pela Pró-Reitoria de Extensão da UFMG (Proex/UFMG), dedicada aos estudos extensionistas desenvolvidos nos contextos nacional e internacional. Objetiva contribuir com análises e reflexões sobre os fundamentos, os conceitos, as experiências extensionistas e suas repercussões, buscando fortalecer o diálogo universidade/sociedade.' },

  {imageTitle: 'Revista da Universidade Federal de Minas Gerais',
   imagePath:  '../../../assets/periodicos/Revista-da-UFMG.jpg',
   link: 'https://www.ufmg.br/revistaufmg/',
 imageDescription: 'Publicação semestral da Universidade Federal de Minas Gerais, vinculada à Pró-Reitoria de Planejamento, que tem como objetivo principal abordar temáticas específicas numa perspectiva interdisciplinar, podendo divulgar também resultados de pesquisas e de produções teóricas e artísticas diversas.' },

  {imageTitle: 'Revista Docência do Ensino Superior',
   imagePath:  '../../../assets/periodicos/Revista-Docência-do-Ensino-Superior.jpg',
   link: 'https://seer.ufmg.br/index.php/rdes',
  imageDescription: 'Publicação semestral do GIZ – Diretoria de Inovação e Metodologias de Ensino, vinculada à Prograd/UFMG. Destina-se à publicação de artigos originais, resultados de pesquisas, relatos de experiências relativos à docência no ensino superior e entrevistas. Tem como missão constituir-se em mais um espaço e fórum de debates relacionados à docência no ensino superior no contexto das inovações em metodologias e tecnologias de ensino. ' },

  {imageTitle: 'Arquivos do Museu de História Natural e Jardim Botânico da UFMG',
   imagePath:  '../../../assets/periodicos/Arquivos-do-Museu-de-História-Natural-e-Jardim-Botânico-da-UFMG.jpg',
   link: 'https://www.ufmg.br/mhnjb/publicacoes/mhnjb/arquivos-do-museu/',
   imageDescription: 'Periódico semestral que busca a preservação da memória e a promoção do conhecimento, através de publicação de pesquisas científica nos campos da arqueologia, botânica, cartografia, museologia, dentre outras, realizadas pelo Museu de História Natural e Jardim Botânico da UFMG. ' },

  ];


  constructor() { }

  ngOnInit() {
  }

}
