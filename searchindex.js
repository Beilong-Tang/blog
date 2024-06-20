Object.assign(window.search, {"doc_urls":["index.html#welcome-to-my-blog","paper/index.html#paper","paper/masksr.html#masksr","paper/masksr.html#distorted-speech-encoder","paper/masksr.html#cosine-scheduler","publication.html#publication","publication.html#2024","publication.html#fedkit-enabling-cross-platform-federated-learning-for-android-and-ios","diary.html#diary","diary.html#2024-june-6"],"index":{"documentStore":{"docInfo":{"0":{"body":17,"breadcrumbs":4,"title":2},"1":{"body":9,"breadcrumbs":2,"title":1},"2":{"body":6,"breadcrumbs":3,"title":1},"3":{"body":36,"breadcrumbs":5,"title":3},"4":{"body":33,"breadcrumbs":4,"title":2},"5":{"body":0,"breadcrumbs":2,"title":1},"6":{"body":0,"breadcrumbs":2,"title":1},"7":{"body":21,"breadcrumbs":9,"title":8},"8":{"body":0,"breadcrumbs":2,"title":1},"9":{"body":0,"breadcrumbs":4,"title":3}},"docs":{"0":{"body":"This is Beilong Tang from Duke Kunshan University. I am currently working on using discrete tokens for speech separation. This blog serves as a document to record my progress.","breadcrumbs":"Welcome to my blog » Welcome to my blog","id":"0","title":"Welcome to my blog"},"1":{"body":"MaskSR: Masked Language Model for Full-band Speech Restoration (MaskSR)","breadcrumbs":"Paper » Paper","id":"1","title":"Paper"},"2":{"body":"Publication Date: 4 June 2024, link","breadcrumbs":"Paper » MaskSR » MaskSR","id":"2","title":"MaskSR"},"3":{"body":"using STFT with window_size: import torch audio = torch.randn(1, 3 * 44100) # 3 seconds with sample rate 44.1kHz y = torch.stft(audio, 2048, 512, return_complex = True) print(y.shape) # [F, T] w = torch.abs(y) # [F, T] w = w.pow(0.3) # X_0.3 compressed power spectrogram with shape [F,T] print(w.shape)","breadcrumbs":"Paper » MaskSR » Distorted Speech Encoder:","id":"3","title":"Distorted Speech Encoder:"},"4":{"body":"During training, the masking ratio (from 0 to 1) will be applied to \\( 9 \\times T \\) codebook by sampling \\( r \\sim \\mathcal{U}(0, 1) \\), The cosine schedule function should be \\( f(r) = cos(\\frac{\\pi}{2}r) \\), this makes sure that \\(f(0) = 1\\) and \\(f(1) = 0\\). The cross entropy loss is calculated on the masking position.","breadcrumbs":"Paper » MaskSR » Cosine Scheduler","id":"4","title":"Cosine Scheduler"},"5":{"body":"","breadcrumbs":"Publication » Publication","id":"5","title":"Publication"},"6":{"body":"","breadcrumbs":"Publication » 2024","id":"6","title":"2024"},"7":{"body":"Authors: Sichang He, Beilong Tang , Boyan Zhang, Jiaoqi Shao1, Xiaomin Ouyang, Daniel Nata Nugraha Journal: IEEE INFOCOM 2024 DEMO Paper Link : arxiv","breadcrumbs":"Publication » FedKit: Enabling Cross-Platform Federated Learning for Android and iOS","id":"7","title":"FedKit: Enabling Cross-Platform Federated Learning for Android and iOS"},"8":{"body":"","breadcrumbs":"Diary » Diary","id":"8","title":"Diary"},"9":{"body":"","breadcrumbs":"Diary » 2024 June 6","id":"9","title":"2024 June 6"}},"length":10,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"0":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}},"1":{"df":1,"docs":{"4":{"tf":1.7320508075688772}}},"2":{"0":{"2":{"4":{"df":4,"docs":{"2":{"tf":1.0},"6":{"tf":1.0},"7":{"tf":1.0},"9":{"tf":1.0}}},"df":0,"docs":{}},"4":{"8":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"3":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}},"4":{"4":{".":{"1":{"df":0,"docs":{},"k":{"df":0,"docs":{},"h":{"df":0,"docs":{},"z":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"df":0,"docs":{}},"1":{"0":{"0":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"2":{"tf":1.0}}},"5":{"1":{"2":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"6":{"df":1,"docs":{"9":{"tf":1.0}}},"9":{"df":1,"docs":{"4":{"tf":1.0}}},"a":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"x":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":1,"docs":{"7":{"tf":1.0}}}}}},"u":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"7":{"tf":1.0}}}}}}}},"b":{"a":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":2,"docs":{"0":{"tf":1.0},"7":{"tf":1.0}}}}}}}},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}},"o":{"df":0,"docs":{},"y":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{}}}},"c":{"a":{"df":0,"docs":{},"l":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"e":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}},"s":{"(":{"\\":{"df":0,"docs":{},"f":{"df":0,"docs":{},"r":{"a":{"c":{"df":0,"docs":{},"{":{"\\":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"}":{"df":0,"docs":{},"{":{"2":{"df":0,"docs":{},"}":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":2,"docs":{"4":{"tf":1.0},"7":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}},"d":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"7":{"tf":1.0}}}}}},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"df":1,"docs":{"7":{"tf":1.0}}}}},"i":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"8":{"tf":1.0}}}}},"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}},"o":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{}},"c":{"df":0,"docs":{},"o":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}}},"f":{"(":{"0":{"df":1,"docs":{"4":{"tf":1.0}}},"1":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.0}}}},",":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":1,"docs":{"3":{"tf":1.4142135623730951}},"e":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"7":{"tf":1.0}}}},"k":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":1.0}}}}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}},"n":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"df":0,"docs":{}}}},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":1,"docs":{"7":{"tf":1.0}}}}},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":1,"docs":{"7":{"tf":1.0}}}}},"df":0,"docs":{}}}},"o":{"df":1,"docs":{"7":{"tf":1.0}}}},"j":{"df":0,"docs":{},"i":{"a":{"df":0,"docs":{},"o":{"df":0,"docs":{},"q":{"df":0,"docs":{},"i":{"df":1,"docs":{"7":{"tf":1.0}}}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{}}}}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":2,"docs":{"2":{"tf":1.0},"9":{"tf":1.0}}}}}},"k":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"l":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"7":{"tf":1.0}}}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"k":{"df":2,"docs":{"2":{"tf":1.0},"7":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"m":{"a":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.0}}}},"s":{"df":0,"docs":{},"k":{"df":2,"docs":{"1":{"tf":1.0},"4":{"tf":1.4142135623730951}},"s":{"df":0,"docs":{},"r":{"df":2,"docs":{"1":{"tf":1.4142135623730951},"2":{"tf":1.0}}}}}},"t":{"df":0,"docs":{},"h":{"c":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"{":{"df":0,"docs":{},"u":{"df":0,"docs":{},"}":{"(":{"0":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}}},"n":{"a":{"df":0,"docs":{},"t":{"a":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"u":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"h":{"a":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"y":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"7":{"tf":1.0}}}}},"df":0,"docs":{}}}},"p":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"1":{"tf":1.0},"7":{"tf":1.0}}}}}},"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"7":{"tf":1.0}}}}}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"(":{"df":0,"docs":{},"w":{".":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"p":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"y":{".":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"p":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}},"u":{"b":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"df":2,"docs":{"2":{"tf":1.0},"5":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"r":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}},"i":{"df":0,"docs":{},"o":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":1,"docs":{"4":{"tf":1.0}},"e":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"_":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"s":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":2,"docs":{"3":{"tf":1.0},"4":{"tf":1.0}}}}}},"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{},"p":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"v":{"df":1,"docs":{"0":{"tf":1.0}}}}},"h":{"a":{"df":0,"docs":{},"o":{"1":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}},"p":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}},"i":{"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"7":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"m":{"df":1,"docs":{"4":{"tf":1.0}}}},"p":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"m":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"h":{"df":3,"docs":{"0":{"tf":1.0},"1":{"tf":1.0},"3":{"tf":1.0}}}},"df":0,"docs":{}}}},"t":{"df":0,"docs":{},"f":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"t":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":2,"docs":{"0":{"tf":1.0},"7":{"tf":1.0}}}}},"df":2,"docs":{"3":{"tf":1.4142135623730951},"4":{"tf":1.0}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}},"r":{"c":{"df":0,"docs":{},"h":{".":{"a":{"b":{"df":0,"docs":{},"s":{"(":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"n":{"(":{"1":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"f":{"df":0,"docs":{},"t":{"(":{"a":{"df":0,"docs":{},"u":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}},"r":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"s":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":1.0}}}},"w":{".":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"(":{"0":{".":{"3":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":1,"docs":{"3":{"tf":1.4142135623730951}},"e":{"df":0,"docs":{},"l":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"_":{"df":0,"docs":{},"s":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"x":{"_":{"0":{".":{"3":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{},"i":{"a":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"7":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"y":{"df":1,"docs":{"3":{"tf":1.0}}},"z":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"7":{"tf":1.0}}}}},"df":0,"docs":{}}}}},"breadcrumbs":{"root":{"0":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}},"1":{"df":1,"docs":{"4":{"tf":1.7320508075688772}}},"2":{"0":{"2":{"4":{"df":4,"docs":{"2":{"tf":1.0},"6":{"tf":1.4142135623730951},"7":{"tf":1.0},"9":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"4":{"8":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"3":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}},"4":{"4":{".":{"1":{"df":0,"docs":{},"k":{"df":0,"docs":{},"h":{"df":0,"docs":{},"z":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"df":0,"docs":{}},"1":{"0":{"0":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"2":{"tf":1.0}}},"5":{"1":{"2":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"6":{"df":1,"docs":{"9":{"tf":1.4142135623730951}}},"9":{"df":1,"docs":{"4":{"tf":1.0}}},"a":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"7":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"x":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":1,"docs":{"7":{"tf":1.0}}}}}},"u":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"7":{"tf":1.0}}}}}}}},"b":{"a":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":2,"docs":{"0":{"tf":1.0},"7":{"tf":1.0}}}}}}}},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"df":1,"docs":{"0":{"tf":2.0}}}}},"o":{"df":0,"docs":{},"y":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{}}}},"c":{"a":{"df":0,"docs":{},"l":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"e":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}},"s":{"(":{"\\":{"df":0,"docs":{},"f":{"df":0,"docs":{},"r":{"a":{"c":{"df":0,"docs":{},"{":{"\\":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"}":{"df":0,"docs":{},"{":{"2":{"df":0,"docs":{},"}":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.7320508075688772}}}}}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":2,"docs":{"4":{"tf":1.0},"7":{"tf":1.4142135623730951}}}}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}},"d":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"7":{"tf":1.0}}}}}},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"df":1,"docs":{"7":{"tf":1.0}}}}},"i":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":2,"docs":{"8":{"tf":1.7320508075688772},"9":{"tf":1.0}}}}},"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}}}},"o":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"7":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"c":{"df":0,"docs":{},"o":{"d":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}}},"f":{"(":{"0":{"df":1,"docs":{"4":{"tf":1.0}}},"1":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.0}}}},",":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":1,"docs":{"3":{"tf":1.4142135623730951}},"e":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"7":{"tf":1.4142135623730951}}}},"k":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}},"n":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"df":0,"docs":{}}}},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":1,"docs":{"7":{"tf":1.0}}}}},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":1,"docs":{"7":{"tf":1.0}}}}},"df":0,"docs":{}}}},"o":{"df":1,"docs":{"7":{"tf":1.4142135623730951}}}},"j":{"df":0,"docs":{},"i":{"a":{"df":0,"docs":{},"o":{"df":0,"docs":{},"q":{"df":0,"docs":{},"i":{"df":1,"docs":{"7":{"tf":1.0}}}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{}}}}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":2,"docs":{"2":{"tf":1.0},"9":{"tf":1.4142135623730951}}}}}},"k":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"l":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"7":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"k":{"df":2,"docs":{"2":{"tf":1.0},"7":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"m":{"a":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.0}}}},"s":{"df":0,"docs":{},"k":{"df":2,"docs":{"1":{"tf":1.0},"4":{"tf":1.4142135623730951}},"s":{"df":0,"docs":{},"r":{"df":4,"docs":{"1":{"tf":1.4142135623730951},"2":{"tf":1.7320508075688772},"3":{"tf":1.0},"4":{"tf":1.0}}}}}},"t":{"df":0,"docs":{},"h":{"c":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"{":{"df":0,"docs":{},"u":{"df":0,"docs":{},"}":{"(":{"0":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}}},"n":{"a":{"df":0,"docs":{},"t":{"a":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"u":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"h":{"a":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"y":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"7":{"tf":1.0}}}}},"df":0,"docs":{}}}},"p":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":5,"docs":{"1":{"tf":1.7320508075688772},"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0},"7":{"tf":1.0}}}}}},"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"7":{"tf":1.4142135623730951}}}}}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"(":{"df":0,"docs":{},"w":{".":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"p":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"y":{".":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"p":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}},"u":{"b":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"df":4,"docs":{"2":{"tf":1.0},"5":{"tf":1.7320508075688772},"6":{"tf":1.0},"7":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"r":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}},"i":{"df":0,"docs":{},"o":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":1,"docs":{"4":{"tf":1.0}},"e":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"_":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"s":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":2,"docs":{"3":{"tf":1.0},"4":{"tf":1.0}}}}}},"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.7320508075688772}}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{},"p":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"v":{"df":1,"docs":{"0":{"tf":1.0}}}}},"h":{"a":{"df":0,"docs":{},"o":{"1":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}},"p":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}},"i":{"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"7":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"m":{"df":1,"docs":{"4":{"tf":1.0}}}},"p":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"m":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"h":{"df":3,"docs":{"0":{"tf":1.0},"1":{"tf":1.0},"3":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}},"t":{"df":0,"docs":{},"f":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"t":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":2,"docs":{"0":{"tf":1.0},"7":{"tf":1.0}}}}},"df":2,"docs":{"3":{"tf":1.4142135623730951},"4":{"tf":1.0}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}},"r":{"c":{"df":0,"docs":{},"h":{".":{"a":{"b":{"df":0,"docs":{},"s":{"(":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"n":{"(":{"1":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"f":{"df":0,"docs":{},"t":{"(":{"a":{"df":0,"docs":{},"u":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}},"r":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"s":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":1.0}}}},"w":{".":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"(":{"0":{".":{"3":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":1,"docs":{"3":{"tf":1.4142135623730951}},"e":{"df":0,"docs":{},"l":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"_":{"df":0,"docs":{},"s":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"x":{"_":{"0":{".":{"3":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{},"i":{"a":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"7":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"y":{"df":1,"docs":{"3":{"tf":1.0}}},"z":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"7":{"tf":1.0}}}}},"df":0,"docs":{}}}}},"title":{"root":{"2":{"0":{"2":{"4":{"df":2,"docs":{"6":{"tf":1.0},"9":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"6":{"df":1,"docs":{"9":{"tf":1.0}}},"a":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}},"b":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"7":{"tf":1.0}}}}}}},"d":{"df":0,"docs":{},"i":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"8":{"tf":1.0}}}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{}},"c":{"df":0,"docs":{},"o":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"f":{"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"7":{"tf":1.0}}}},"k":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":1.0}}}}}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"o":{"df":1,"docs":{"7":{"tf":1.0}}}},"j":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":1,"docs":{"9":{"tf":1.0}}}}}},"l":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"7":{"tf":1.0}}}}},"df":0,"docs":{}}},"m":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"k":{"df":0,"docs":{},"s":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"df":0,"docs":{}},"p":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"7":{"tf":1.0}}}}}}}},"df":0,"docs":{}},"u":{"b":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"s":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}}},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});