---
id: Publishing-your-website
title: Publishing your website
sidebar_label: Publishing your website
---

Once you finish writing the code and organizing the files that make up your website, you need to put it all online so people can find it. This article lays out how to get your simple sample code online with little effort.

___

What are the options?
---------------------

Publishing a website isn't a simple topic, mainly because there are so many different ways to do it. In this article we don't aim to document all possible methods. Rather, we'll discuss the pros and cons of three broad strategies from a beginner's point of view, and then walk you through one method that will work for now.

### Getting hosting and a domain name

If you want total control over your published website, then you'll probably need to spend money to buy:

*   Hosting — rented file space on a hosting company's [web server](/en-US/Learn/What_is_a_web_server). You put your website files on this space, and the web server serves the content to web users who request it.
*   A [domain name](/en-US/Learn/Understanding_domain_names) — the unique address where people can find your website, like `http://www.mozilla.org`, or `http://www.bbc.co.uk`. You rent your domain name for so many years from a **domain registrar**.

Many professional websites go online this way.

In addition, you will need a `File Transfer Protocol (FTP)` program (see [How much does it cost: software](/en-US/Learn/How_much_does_it_cost#Software) for more details) to actually transfer the website files over to the server. FTP  programs vary widely, but generally you have to log on to your web server using details provided by your hosting company (e.g. username, password, host name). Then the program shows you your local files and the web server's files in two windows, so you can transfer them back and forth:

![](https://mdn.mozillademos.org/files/9469/ftp.jpg)

#### Tips for finding hosting and domains

*   We don't promote specific commercial hosting companies or domain name registrars here. To find hosting companies and registrars, just search for "web hosting" and "domain names". All registrars will have a feature to allow you to check if the domain name you want is available, or if someone else has already registered it.
*   Your home or office `internet service provider` may provide some limited hosting for a small website. The available feature set will be limited, but it might be perfect for your first experiments — contact them and ask!
*   There are a few free services available like [Neocities](https://neocities.org/), [Blogger](https://www.blogger.com), and [WordPress](https://wordpress.com/). Again, you get what you pay for, but they are ideal for your initial experiments. Free services mostly don't require FTP software for uploads either — you can just drag and drop right inside their web interface.
*   Sometimes companies provide both hosting and domains in one package.

### Using an online tool like GitHub or Google App Engine

Some tools let you publish your website online:

*   [GitHub](https://github.com/) is a "social coding" site. It allows you to upload code repositories for storage in the [Git](http://git-scm.com/) **version control system.** You can then collaborate on code projects, and the system is open-source by default, meaning that anyone in the world can find your GitHub code, use it, learn from it, and improve on it. GitHub has a very useful feature called [GitHub Pages](https://pages.github.com/), which allows you to expose website code live on the web.
*   [Google App Engine](https://cloud.google.com/appengine/ "App Engine - Build Scalable Web & Mobile Backends in Any Language  |  Google Cloud Platform") is a powerful platform that lets you build and run applications on Google’s infrastructure — whether you need to build a multi-tiered web application from scratch or host a static website. See [How do you host your website on Google App Engine?](/en-US/docs/Learn/Common_questions/How_do_you_host_your_website_on_Google_App_Engine) for more information.

Unlike most hosting, such tools are usually free to use, but you only get a limited feature-set.

### Using a web-based IDE such as Thimble

There are a number of web apps that emulate a website development environment, allowing you to enter HTML, CSS and JavaScript and then display the result of that code when rendered as a website — all in one browser tab. Generally speaking these tools are quite easy, great for learning, and free (for basic features), and they host your rendered page at a unique web address. However, the basic features are pretty limited, and the apps usually don't provide hosting space for assets (like images).

Try playing with some of these examples, and see which one you like the best:

*   [JSFiddle](https://jsfiddle.net/)
*   [Thimble](https://thimble.mozilla.org)
*   [JS Bin](http://jsbin.com/)
*   [CodePen](https://codepen.io/)

![](https://mdn.mozillademos.org/files/9471/jsbin-screen.png)

Publishing via GitHub
---------------------

Now let's take you through how to easily publish your site via GitHub Pages.

1.  First of all, [sign up for GitHub](https://github.com/) and verify your email address.
2.  Next, you need to [create a repository](https://github.com/new) for your files to go in.
3.  On this page, in the _Repository name_ box, enter _username_.github.io, where _username_ is your username. So for example, our friend bobsmith would enter _bobsmith.github.io_.  
    Also check _Initialize this repository with a README_ and then click _Create repository_.![](https://mdn.mozillademos.org/files/9479/github-create-repo.png)
4.  After that, drag and drop the content of your website folder into your repository and then click _Commit changes_.  
     
> **Note**: Make sure your folder has an `index.html` file.
    
5.  Now navigate your browser to _username_.github.io to see your website online. For example, for the username _chrisdavidmills_, go to [_chrisdavidmills_.github.io](http://chrisdavidmills.github.io/).
    
   > **Note**: It may take a few minutes for your website to go live. If it doesn't work immediately, you may have to wait a few minutes and then try again.
    

To learn more, see [GitHub Pages Help](https://help.github.com/categories/github-pages-basics/).
