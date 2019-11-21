$(function() {
    
    const team = {
        nome: [
            'None', 'claudio', 'douglas', 'eder', 'zabin', 'lucas', 'tieferson'
        ],
        description: [
            'Nosso time é composto por profissionais das mais diversas áreas de TI, oferecendo agilidade, segurança e qualidade em nossos serviços.',
            'Graduado em Ciência da Computação, vive no computador desde 2003 e trabalha na área desde 2005. É apaixonado por sistemas do tipo Unix, e não consegue se imaginar sem usar um terminal com ferramentas de modo texto. Trabalha com administração de sistemas e de redes, tem foco na área de segurança da informação. É Retrogamer, mas não deixa de lado o Dota2 e qualquer versão do Civilization.',
            'Profissional graduado em Administração com mais de 5 anos de atuação em empresas de suprimentos e serviços, intensa vivência com o ambiente de tecnologia e adepto as novas tendências da área. Pós graduando em Gestão de Tecnologia e atuante na área de TI. É assiduamente voltado a novas tendências e é a favor de mudanças, desde que bem planejadas e com um impacto realmente significativo na obtenção de resultados. A sua maior paixão é poder trabalhar com e para pessoas.',
            'Graduado em Gestão em TI e atuando na área de helpdesk, desde  2008. Possui cursos de aperfeiçoamento em rede  estruturada, comandos elétricos e automação industrial. Tem planos de fazer Pós para ampliar seus conhecimento. Tem paixão pela área de helpdesk  auxiliando seus clientes com excelência. Alguns dos hobbies prediletos são curtir um rock, viajar e conhecer pessoas do bem.',
            'Desenvolvedor fullstack e mobile, apaixonado por tecnologia e que busca criar soluções que façam diferença na vida das pessoas. Gosta de ficar por dentro das novidades no mundo do desenvolvimento e de testar novas tecnologias. É gamer desde sempre e vegano desde 2016.',
            'Analista de sistemas com foco em atuar em Governança de TI.  Com planos em fazer mestrado e realizar o sonho de fazer pupilos. Alguns dos hobbies prediletos é a musica, guitarrista com talento para ajudar pessoas.',
            'Graduado em Ciência da Computação e pós-graduando em Projeto de Redes e Computação em Nuvem, apaixonado por tecnologia, atua na área desde 2004. Joga basquete e toca violão nas horas vagas. Com grande interesse em virtualização e desenvolvimento PHP busca criar soluções que agreguem valor aos clientes.'
        ]
    }

    $("#team img").hover(function(){
        var id = $(this).attr('id')
        var url = 'assets/equipe/'
        
        if($(`#${id}`).attr('src') === `${url}${id}.jpg`){
            $(`#${id}`).attr('src',`${url}${id}_pb.jpg`)
            $(`#description_team`).text(team.description[0])
        } else {
            $(`#${id}`).attr('src',`${url}${id}.jpg`)
            $(`#description_team`).text(team.description[team.nome.indexOf(id)])
        }
    })
})
