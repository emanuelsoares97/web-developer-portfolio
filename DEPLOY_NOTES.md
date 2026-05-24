# Deploy notes

## GitHub Pages + domínio próprio

1. Compra o domínio.
2. No repositório GitHub, vai a **Settings > Pages > Custom domain**.
3. Coloca o domínio, por exemplo `emanuelsoares.dev`.
4. No fornecedor do domínio, configura o DNS de acordo com as instruções do GitHub Pages.
5. Quando o domínio estiver confirmado, ativa **Enforce HTTPS**.

Se usares domínio próprio, cria um ficheiro chamado `CNAME` na raiz do projeto com o domínio real.
Exemplo:

```txt
emanuelsoares.dev
```

O ficheiro `CNAME.example` serve apenas como modelo.

## Formulário de contacto

O formulário deixou de depender do Render. Agora usa Web3Forms.

1. Cria uma conta/chave em Web3Forms.
2. Abre `contacts.html`.
3. Troca `YOUR_WEB3FORMS_ACCESS_KEY` pela tua chave real.

Enquanto não trocares a chave, o JavaScript bloqueia o envio para evitar erro em produção.

## SEO

Foram adicionados:

- meta descriptions;
- Open Graph para LinkedIn;
- favicon;
- `robots.txt`;
- `sitemap.xml`.

Quando mudares para domínio próprio, atualiza os URLs em:

- `robots.txt`;
- `sitemap.xml`;
- tags `canonical` e `og:url` nos ficheiros HTML.
