Innovision-Club
===============

![alt text](https://github.com/YuZaGa/Club-website/blob/master/staticfiles/11.png)

College Club website developed with Django

This is a dynamic website for addressing the basic needs of a college club such as blogging, announcements, team management etc which can be handled by the inbuilt Admin Panel.

Current features
----------------

![alt text](https://github.com/YuZaGa/Club-website/blob/master/staticfiles/22.png)

Latest Events :
* Ability to announce upcoming events
* Ability to insert a link alongwith posters of such events to direct to registeration forms

![alt text](https://github.com/YuZaGa/Club-website/blob/master/staticfiles/33.png)

Latest Blogs :
* Inbuilt advanced editor with tags, active & featured filters, Search functionality
* 

Team Profile : 
* Add Team members according to thier groups
* Decide the order in which you want them to be displayed. 
* Ability to add thier social handle and thier description along with their photograph



## Setup
1. Git Clone this project:
2. Create an python environment with ```python -m venv venv``` or ```virtualenv venv``` and activate it with (windows:```venv\Scripts\activate```, Mac/Linux:```source venv/bin/activate```.
3. Install required packages: ``` pip install -r requirements.txt ```
4. Update the cloudinary API and key in settings.py
5. Create superuser
6. Run app: ``` python manage.py runserver ```

Bonus - Publish it on Heroku with Cloudinary serving as image storage solution. 

https://codeburst.io/deploy-your-django-project-for-free-140d73a2c76b

https://github.com/klis87/django-cloudinary-storage

The free tier of Heroku sleeps after 30 minutes of inactivity. Use Kaffiene (http://kaffeine.herokuapp.com/) to keep it awake. 


## Addition and Modification
Due credit to people who have worked on different components of the project beforehand. **Dennis Ivy**
