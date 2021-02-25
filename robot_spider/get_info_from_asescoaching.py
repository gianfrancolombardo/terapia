


from urllib.request import urlopen
from bs4 import BeautifulSoup
import re
import codecs

def get_page(url):
    html = urlopen(url)
    return BeautifulSoup(html.read(),"html5lib")

# Asociados
#url = 'https://www.asescoaching.org/coaches-certificados/coaches-asociados-certificados/'
# Pro
url = 'https://www.asescoaching.org/coaches-certificados/coaches-profesionales-certificados/'
# Senior
#url = 'https://www.asescoaching.org/coaches-certificados/coaches-profesionales-senior/'
res = get_page(url)

result = []

for item in res.find_all("div", class_='asesco_members_group_list_item'):
    profile_id = item.get('data-id')
    url_profile = 'https://www.asescoaching.org/socios/?id=' + profile_id

    page = get_page(url_profile)
    
    
    name = ''
    for text in page.find_all('script', text=re.compile("const title")):
        name = str(text).split('"')[1]


    for mail in page.find_all("a", href=re.compile(r"^mailto:")):
        _mail=mail.text.strip()
        if _mail!='info@asescoaching.org':
            result.append({
                "name": name,
                "email": _mail
            })
    #break

with codecs.open('list_cpc.csv', 'w', "utf-8") as f:
    for item in result:
        f.write("{};{}\n".format(item['name'], item['email']))