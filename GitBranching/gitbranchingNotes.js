//command to create branch: git branch
//command to enter your branch: git checkout
//command to create branch and enter at the same time: git checkout -b <branch name>

//merging allows you to get out of the branch, develop a new feature and combine it back in
//merge creates a commit that has two unique parents
//a commit w two parents means that you want to include all the work from both parents and the set of all their parents

/**
 * se eu tenho uma branch main (ou master) e a branch q eu criei
 * qnd eu dou merge na master eu nao to juntando a minha na master
 * eu to criando um outro commit q inclui o conteudo de ambas e falando q agora ele eh o main
 * main vai passar a ter todo o trabalho dos commits
 *
 * pra dar merge de uma branch no main
 * vc precisa dar checkout na main, commitar e ai dar git merge <branchname>
 *     a gnt faz isso no bitbucket entao n precisa normalmente
 *
 * REBASE
 * move o trabalho da sua branch direto pra main como se vc tivesse feito isso sequencialmente e nao paralelamente
 * precisa dar checkout e commit na branch, depois na main, volta pra branch e da git rebase main
 *
 * HEAD
 * Head é o nome simbolico do commit onde vc deu checkout. Sempre aponta para o commit mais recente
 * a maioria dos comandos do git q mudam a work tree vao comecar mudando o HEAD
 *
 *normalmente aponta para um branch (como bugFix) qnd vc commita, o status do bugFix eh alterado
 * e isso se torna visivel no HEAD
 *
 * detaching head significa atrelar o head a um commit ao inves de atrelar a uma branch
 * ou seja, atrelar so ao q ta commitado
 * pra fazer isso tem q dar git checkout "hash" do comando
 * no learngitbranching seria dar git checkout C4
 * na vida real teria q achar o hash do commit (usando git log - acha o commit certo se vc usar so 3 caracteres do hash)
 * ou add ^0 no nome da branch pra subir 1 commit por vez. ^ se chama Caret operator
 * se vc usar main^ por ex ta pedindo pro git achar o primeiro parent da main
 * main^^ eh pra achar o grandparent
 * tbm da pra subir o numero de commits q vc quiser usando ~<numero>
 *
 * THE ~ OPERATOR
 * vc pode especificar um numero especifico de commits back usando git checkout HEAD~numero
 *
 * git branch -f main HEAD-3 -> move a forca a main branch pra tres parentes antes de HEAD
 * forca uma branch pra um determinado commit?
 *
 * Git reset -> reverte mudancas virando a branch pra tras no tempo pra um commit mais antigo
 * eh como se o ultimo commit nunca tivesse acontecido
 * so funciona com branches na sua maquina local, nao funciona em branches remotas que os outros estao usando
 *
 * pra voltar atras em branches remotas que foram pushadas e estao sendo utilizadas por outros,
 * eh preciso utilizar git revert
 *
 * git reset HEAD~1 resets the current commit to its latest one
 * if you attach commits to head its easier to move them around, by moving head around
 *
 * git cherry-pick <commit 1> <commit 2> <commit 3>
 *     creates a copy of only the commits you want, then you can stage them for example
 *
 *git interactive rebase
 * using git rebase with -i opens up a UI window where you can see which commits are about to be copied
 * below the target of the rebase, their hashes and messages. It opens the file in a text editor like vin
 * you can also use this function to squash commits, amend commit messages, editing commits etc
 *
 * git rebase -i HEAD~number
 * rebases (create a Commit' copy) a ~number of commits up of HEAD (latest/current one)
 */

