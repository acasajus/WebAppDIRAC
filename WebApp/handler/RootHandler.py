import json
from DIRAC import gConfig
from WebAppDIRAC.Lib import Conf
from WebAppDIRAC.Lib.WebHandler import WebHandler, WErr
from WebAppDIRAC.Lib.SessionData import SessionData
from DIRAC.ConfigurationSystem.Client.Helpers import Registry

class RootHandler(WebHandler):

  AUTH_PROPS = "all"
  LOCATION = "/"

  def web_changeGroup( self ):
    try:
      to = self.request.arguments[ 'to' ][-1]
    except KeyError:
      raise WErr( 400, "Missing 'to' argument" )
    self.__change( group = to )

  def web_changeSetup( self ):
    try:
      to = self.request.arguments[ 'to' ][-1]
    except KeyError:
      raise WErr( 400, "Missing 'to' argument" )
    self.__change( setup = to )

  def __change( self, setup = None, group = None ):
    if not setup:
      setup = self.getUserSetup()
    if not group:
      group = self.getUserGroup() or 'anon'
    url = [ Conf.rootURL().strip( "/" ), "s:%s" % setup, "g:%s" % group ]
    self.redirect( "/%s" % "/".join( url ) )

  def web_getConfigData( self ):
    self.write(json.dumps(SessionData().getData()))

  def web_index(self):
    # Render base template
    data = SessionData().getData()
    print self.request.arguments
    self.render( "root.tpl", base_url = data["baseURL"], _dev = Conf.devMode(), ext_version = data[ 'extVersion' ] )

