type Article = {
  id: number;
  title: string;
  body: string;
  sources?: string[];
};

let articles: Article[] = [];

const computer_vision = {
  id: 0,
  title: "Computer Vision",
  body: `The reality of life is that you will sometimes have to do something that you
don't want to do. But what if that wasn't the case ? The ongoing research and
development of neural networks (specifically computer vision) will dramatically
change the way our lives are lived. This could be robots completing household
chores like laundry or dishes, self driving cars, or even dangerous jobs like
logging. All of the examples mentioned may seem like they have nothing to do
with one another, but in fact they will all be built on the same foundation of
computer vision.
<split>
#3What is computer vision ?
<split>
Computer vision is a subset of artificial intelligence that focuses on
processing meaningful information from visual sources like videos and images.
In that respect, human vision and computer vision are not very different. A
person has the advantage of processing new information from the time they first
opened their eyes, where as a computer has to work with whatever data is has
available. The general idea is that the more information that is available,
the better computer vision will get.
<split>
#3History of Computer Vision
<split>
Experiments in computer vision date back to the 1950s, using some form of
neural network to classify shapes. However, training a solid neural network
takes enormous amounts of data. In today's landscape, there are almost endless
amounts of data that can be used from all over the internet. People have
phones with built in cameras to take lots of videos and pictures, computers are
more performant, and new algorithms such as Convolutional Neural Networks are
all reasons for the increased popularity of computer vision.
<split>
#3How does computer vision work ?
<split>
Computer vision is a word to describe a neural network that can "visualize" the
data. More specifically, the neural network most commonly used for computer
vision problems is a Convolutional Neural Network. This algorithm
breaks down an image into smaller parts and focuses on learning patterns on
these small parts, and grows in complexity in the next layers. For example,
the first layer of the network could focus on edge detection, the next layer
could focus on shapes, etc. Fundamentally, the idea is that the neural network
is learning to "see" an image just as a person would.
<split>
#3Applications of computer vision 
<split>
//NOTE: Try to include examples like videos, images, etc. to showcase the applications
of computer vision
<split>
==There are currently many applications for computer vision. It can be used in:
- X ray analysis in the medical industry for detecting anomalies
- Monitoring equipment in the construction industry for example for rust
- Finding changes in crops in the agricultural industry
- Self driving cars in transportation
- Self checkout at a retail shop
- Facial recognition in security
<split>
#3Conclusion
<split>
// NOTE: Try to define how computer vision is having an impact on the world right
now
<split>
In closing, computer vision can lead to extraordinary things, some that seem
only real in books and films. Computer vision is not yet solved, but with the
many companies working to solve it, and with all the new data gathered every
day, it may be solved shortly.`,
  sources: [
    "(https://www.ibm.com/topics/computer-vision)",
    "(https://www.sas.com/en_ca/insights/analytics/computer-vision.html)",
    "(https://www.v7labs.com/blog/computer-vision-applications)",
  ],
};

articles.push(computer_vision);

export function getArticles(): Article[] {
  return articles;
}

export function getArticle(id: number): Article | undefined {
  return articles.find((arr) => arr.id === id);
}
