export interface Itens {
    idProduto: number,
    codigoBarra: number,
    nomeProduto: string,
    valorProduto: number,
    quantidadeProduto: string,
    marca: string,
    descricao: string,
    garantia: number,
    avaliacao: string,
    curtiu: string,
    naoCurtiu: string,
    imagemDoProduto: {
        idImagem: number,
        localDaImagem: string
    }
}